"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { MapPin, Calendar, ExternalLink, Globe2 } from "lucide-react";
import summitsData from "@/data/summits.json";

interface PinData {
  city: string;
  country: string;
  lat: number;
  lng: number;
  type: string;
  highlight: boolean;
}

export default function HeroGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedPin, setSelectedPin] = useState<PinData | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const width = container.clientWidth || 550;
    const height = container.clientHeight || 550;

    // Scene setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 240;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for all rotating elements
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Base Earth Sphere (Deep navy & ocean)
    const globeRadius = 80;
    const globeGeometry = new THREE.SphereGeometry(globeRadius, 64, 64);
    const globeMaterial = new THREE.MeshPhongMaterial({
      color: 0x001030, // Navy 900
      emissive: 0x001b45,
      specular: 0x0048c0, // Azure 500
      shininess: 30,
      transparent: true,
      opacity: 0.95,
    });
    const baseGlobe = new THREE.Mesh(globeGeometry, globeMaterial);
    globeGroup.add(baseGlobe);

    // 2. Glowing Atmosphere halo
    const glowGeometry = new THREE.SphereGeometry(globeRadius * 1.03, 48, 48);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x0048c0,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide,
    });
    const atmosphere = new THREE.Mesh(glowGeometry, glowMaterial);
    globeGroup.add(atmosphere);

    // 3. Longitude and Latitude grid lines (Grounded in GILD logo motif)
    const wireframeGeometry = new THREE.SphereGeometry(globeRadius * 1.004, 24, 16);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xd89030, // Primary Gold
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const gridMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    globeGroup.add(gridMesh);

    // 4. Subtle procedural continent point cloud
    const dotCount = 1800;
    const dotPositions: number[] = [];
    const dotColors: number[] = [];
    const colorAzure = new THREE.Color(0x0090d8);
    const colorGold = new THREE.Color(0xd89030);

    for (let i = 0; i < dotCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / dotCount);
      const theta = Math.sqrt(dotCount * Math.PI) * phi;

      const r = globeRadius * 1.008;
      const x = r * Math.cos(theta) * Math.sin(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(phi);

      // Distribute points simulating continents
      if (Math.sin(phi * 4) * Math.cos(theta * 3) > -0.2) {
        dotPositions.push(x, y, z);
        const col = Math.random() > 0.75 ? colorGold : colorAzure;
        dotColors.push(col.r, col.g, col.b);
      }
    }

    const dotGeometry = new THREE.BufferGeometry();
    dotGeometry.setAttribute("position", new THREE.Float32BufferAttribute(dotPositions, 3));
    dotGeometry.setAttribute("color", new THREE.Float32BufferAttribute(dotColors, 3));

    const dotMaterial = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
    });
    const continentPoints = new THREE.Points(dotGeometry, dotMaterial);
    globeGroup.add(continentPoints);

    // Helper: convert Lat/Lng to Vector3 on sphere
    const latLngToVector3 = (lat: number, lng: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      const x = -(radius * Math.sin(phi) * Math.cos(theta));
      const z = radius * Math.sin(phi) * Math.sin(theta);
      const y = radius * Math.cos(phi);
      return new THREE.Vector3(x, y, z);
    };

    // 5. Add interactive 3D Gold Pins
    const pinGroup = new THREE.Group();
    globeGroup.add(pinGroup);

    const pinMeshes: { mesh: THREE.Mesh; pin: PinData }[] = [];

    const pins: PinData[] = summitsData.globePins;

    pins.forEach((pin) => {
      const position = latLngToVector3(pin.lat, pin.lng, globeRadius * 1.02);

      // Gold Pin Head
      const pinGeom = new THREE.SphereGeometry(pin.highlight ? 3.2 : 2.2, 16, 16);
      const pinMat = new THREE.MeshBasicMaterial({
        color: pin.highlight ? 0xf0c050 : 0xd89030,
      });
      const pinMesh = new THREE.Mesh(pinGeom, pinMat);
      pinMesh.position.copy(position);

      // Gold Pin Stem pointing to center
      const stemGeom = new THREE.CylinderGeometry(0.4, 0.4, 6, 8);
      const stemMat = new THREE.MeshBasicMaterial({ color: 0xc07820 });
      const stemMesh = new THREE.Mesh(stemGeom, stemMat);
      stemMesh.position.copy(position.clone().multiplyScalar(0.98));
      stemMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), position.clone().normalize());

      pinGroup.add(pinMesh);
      pinGroup.add(stemMesh);

      pinMeshes.push({ mesh: pinMesh, pin });
    });

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xf8d870, 1.2);
    dirLight.position.set(150, 100, 120);
    scene.add(dirLight);

    const blueRimLight = new THREE.PointLight(0x0090d8, 1.5, 300);
    blueRimLight.position.set(-150, -50, -50);
    scene.add(blueRimLight);

    // Initial orientation: focus directly on Nigeria and West Africa
    globeGroup.rotation.y = -0.35;
    globeGroup.rotation.x = 0.18;

    // Mouse Drag Interactions
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotationX = globeGroup.rotation.x;
    let targetRotationY = globeGroup.rotation.y;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setIsInteracting(true);
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      // Raycasting for pin hover / click
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), camera);

      const intersects = raycaster.intersectObjects(pinMeshes.map((p) => p.mesh));

      if (intersects.length > 0) {
        container.style.cursor = "pointer";
      } else {
        container.style.cursor = isDragging ? "grabbing" : "grab";
      }

      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        targetRotationY += deltaX * 0.006;
        targetRotationX += deltaY * 0.006;

        // Limit vertical rotation to prevent flipping upside-down
        targetRotationX = Math.max(-1.1, Math.min(1.1, targetRotationX));

        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseUp = (e: MouseEvent) => {
      if (!isDragging) return;
      isDragging = false;
      setIsInteracting(false);

      // Check if this was a click on a pin
      const rect = renderer.domElement.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), camera);

      const intersects = raycaster.intersectObjects(pinMeshes.map((p) => p.mesh));
      if (intersects.length > 0) {
        const clicked = pinMeshes.find((p) => p.mesh === intersects[0].object);
        if (clicked) {
          setSelectedPin(clicked.pin);
        }
      }
    };

    // Touch support for mobile
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        setIsInteracting(true);
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - previousMousePosition.x;
        const deltaY = e.touches[0].clientY - previousMousePosition.y;

        targetRotationY += deltaX * 0.007;
        targetRotationX += deltaY * 0.007;
        targetRotationX = Math.max(-1.1, Math.min(1.1, targetRotationX));

        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    const domElement = renderer.domElement;
    domElement.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    domElement.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    // Resize handling
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth inertia rotation
      globeGroup.rotation.y += (targetRotationY - globeGroup.rotation.y) * 0.08;
      globeGroup.rotation.x += (targetRotationX - globeGroup.rotation.x) * 0.08;

      // Gentle auto rotation when idle and not reduced-motion
      if (!isDragging && !prefersReducedMotion) {
        targetRotationY += 0.0018;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      domElement.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      domElement.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] flex items-center justify-center">
      {/* Three.js Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
        style={{ touchAction: "none" }}
      />

      {/* Subtle Hint Badge */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full bg-[#001B45]/80 border border-[#D89030]/30 text-[11px] text-[#F8D870] backdrop-blur-sm pointer-events-none flex items-center gap-1.5 shadow-md">
        <Globe2 className="w-3 h-3 text-[#0090D8]" />
        Drag to rotate globe • Click gold pin to inspect summit
      </div>

      {/* Floating Pin Detail Card on Click */}
      {selectedPin && (
        <div className="absolute top-6 right-6 z-20 max-w-xs w-full seal-frame p-4 rounded-md border border-[#D89030] shadow-2xl animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-start justify-between pb-2 border-b border-[#D89030]/25">
            <div className="flex items-center gap-1.5 text-[#F0C050] font-ceremonial text-xs uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#0090D8]" />
              {selectedPin.city}, {selectedPin.country}
            </div>
            <button
              type="button"
              onClick={() => setSelectedPin(null)}
              className="text-[#F8F8F8]/60 hover:text-[#F8F8F8] text-xs font-mono px-1 rounded"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          <div className="pt-2 text-left">
            <p className="font-display text-base font-semibold text-[#F8F8F8] leading-snug">
              {selectedPin.type}
            </p>
            <p className="text-xs text-[#F8F8F8]/70 mt-1">
              Active GILD sovereign mission convening young envoys and multilateral delegates.
            </p>
            <div className="mt-3 pt-2 border-t border-[#0B2F63] flex items-center justify-between">
              <a
                href="/summits"
                className="text-xs font-semibold text-[#F0C050] hover:text-[#F8D870] flex items-center gap-1"
              >
                View Summit Schedule
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
