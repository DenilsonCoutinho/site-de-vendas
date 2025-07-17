"use client"
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
interface TriggerResizeProps {
    inneHeigth: number;
    inneWidth: number;
    setInnerWidth: React.Dispatch<React.SetStateAction<number>>;
    setInneHeigth: React.Dispatch<React.SetStateAction<number>>;
}
const ResizeContext = createContext<TriggerResizeProps | undefined>(undefined);
interface TriggerResizeProviderProps {
    children: ReactNode;
}
export function TriggerResizeProvider({ children }: TriggerResizeProviderProps) {
    const [inneHeigth, setInneHeigth] = useState<number>(0);
    const [inneWidth, setInnerWidth] = useState<number>(0);

    async function windowResize() {
        setInneHeigth(window.innerHeight)
        setInnerWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", () => {
            windowResize()
        })
        return () => {
            // limpa quando o componente for desmontado
            window.removeEventListener('resize', windowResize)
        }
    }, [inneHeigth])

    return (
        <ResizeContext.Provider value={{ inneHeigth, setInneHeigth, inneWidth,setInnerWidth }}>
            {children}
        </ResizeContext.Provider>
    );
}
export function useTriggerResize(): TriggerResizeProps {
    const context = useContext(ResizeContext);
    if (!context) {
        throw new Error('useTriggerResize deve ser usado dentro de um TriggerResizeProvider');
    }
    return context;
}