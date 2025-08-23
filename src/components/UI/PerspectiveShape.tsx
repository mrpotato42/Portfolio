// import type { FunctionComponent, ComponentChildren } from 'preact';
// import { useMemo } from 'preact/hooks';
// import clsx from 'clsx'; // Utilidad para unir clases condicionalmente. Instalar con `npm install clsx`

// export interface PerspectiveShapeProps {
//   // --- Contenido ---
//   children?: ComponentChildren;

//   // --- Dimensiones ---
//   width?: number | string;
//   height?: number | string;

//   // --- Perspectiva (propiedad del contenedor padre) ---
//   perspective?: number; // En píxeles. 0 para desactivar.
//   perspectiveOrigin?: string; // Ej: 'center', 'top right', '50% 50%'

//   // --- Transformaciones (propiedades del hijo) ---
//   rotationX?: number; // Rotación en grados
//   rotationY?: number; // Rotación en grados
//   rotationZ?: number; // Rotación en grados
//   skewX?: number; // Inclinación en grados
//   skewY?: number; // Inclinación en grados
//   scale?: number; // Escala (1 = 100%, 1.5 = 150%)

//   // --- Estilo y Clases ---
//   className?: string; // Clases para el elemento transformado (el interior)
//   containerClassName?: string; // Clases para el contenedor de perspectiva (el exterior)
// }

// const PerspectiveShape: FunctionComponent<PerspectiveShapeProps> = ({
//   children,
//   width = '100%',
//   height = '100%',
//   perspective = 1000,
//   perspectiveOrigin = 'center',
//   rotationX = 0,
//   rotationY = 0,
//   rotationZ = 0,
//   skewX = 0,
//   skewY = 0,
//   scale = 1,
//   className,
//   containerClassName,
// }) => {
//   // Optimizamos la creación del string de transformación
//   const transformStyle = useMemo(() => {
//     const transforms = [
//       `rotateX(${rotationX}deg)`,
//       `rotateY(${rotationY}deg)`,
//       `rotateZ(${rotationZ}deg)`,
//       `skewX(${skewX}deg)`,
//       `skewY(${skewY}deg)`,
//       `scale(${scale})`,
//     ];
//     return { transform: transforms.join(' ') };
//   }, [rotationX, rotationY, rotationZ, skewX, skewY, scale]);

//   const containerStyle = {
//     perspective: perspective > 0 ? `${perspective}px` : 'none',
//     perspectiveOrigin,
//     width,
//     height,
//   };

//   return (
//     <div style={containerStyle} className={clsx('transform-style-3d hover:scale-[1.33] transition-transform duration-500', containerClassName)}>
//       <div
//         className={clsx('w-full h-full', className) }
//         style={transformStyle}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

// export default PerspectiveShape;