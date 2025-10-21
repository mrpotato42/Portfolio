import { type FunctionComponent, type ComponentChildren } from 'preact';
import { useState, useRef, useEffect } from 'preact/hooks';
import ProjectsModal from './ProjectsModal.tsx';
import type { Project } from './ProjectsModal.tsx';

interface ModalTriggerProps {
  children: ComponentChildren;
}

const ModalTrigger: FunctionComponent<ModalTriggerProps> = ({ children }) => {
  // 1. Estado para saber si el modal está abierto
  const [isOpen, setIsOpen] = useState(false);
  // 2. Referencia al elemento <dialog> para controlarlo
  const dialogRef = useRef<HTMLDialogElement>(null);

  // 3. Efecto para abrir/cerrar el modal de forma programática
  useEffect(() => {
    const dialogNode = dialogRef.current;
    if (!dialogNode) return;

    if (isOpen) {
      dialogNode.showModal(); // API nativa para abrir el diálogo
    } else {
      dialogNode.close(); // API nativa para cerrar
    }
  }, [isOpen]);
  
  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };
  
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* 4. El contenedor que recibe el click. Le pasamos los hijos (PerspectiveShape) */}
      <div onClick={handleOpen} class="cursor-pointer">
        {children}
      </div>

      {/* 5. El modal de DaisyUI (basado en <dialog>) */}
      <dialog ref={dialogRef} class="modal" onClose={handleClose} onClick={handleBackdropClick}>
        {/* 
          6. LA ISLA DENTRO DE LA ISLA
          - Usamos client:visible para que el JS de ProjectsModal solo se cargue
            cuando el modal se vaya a mostrar, ¡optimización máxima!
        */}
         {isOpen && (
          <ProjectsModal
      
            onClose={handleClose}
          />
        )} 
      </dialog>
    </>
  );
};



     
    
export default ModalTrigger;