import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import camiseta from "@/assets/aumigo/aumigo-camiseta.jpeg";
import coleira from "@/assets/aumigo/aumigo-coleira.jpeg";
import folheto from "@/assets/aumigo/aumigo-folheto.jpeg";
import logo from "@/assets/aumigo/aumigo-logo.jpeg";
import logotipo from "@/assets/aumigo/aumigo-logotipo.jpeg";
import paleta from "@/assets/aumigo/aumigo-paleta.jpeg";
import postInsta from "@/assets/aumigo/aumigo-post-insta.jpeg";
import tela from "@/assets/aumigo/aumigo-tela.jpeg";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-7xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
        
          className={cn(
            i === 3 || i === 6 ? "md:col-span-2" : "",
            "!bg-card-bg !text-text-primary"
          )}
        />
      ))}
    </BentoGrid>
  );
}

export const AumigoBrandGrid = BentoGridDemo;

const ImageHeader = ({ src }: { src: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <img src={src} alt="Project" className="w-full h-full object-cover" />
  </div>
);

const items = [
  {
    title: "Camiseta",
    description: "Design exclusivo para camiseta AUmigo",
    header: <ImageHeader src={camiseta} />,
 
  },
  {
    title: "Coleira",
    description: "Coleira premium com logo AUmigo",
    header: <ImageHeader src={coleira} />,
  
  },
  {
    title: "Folheto",
    description: "Material informativo da marca",
    header: <ImageHeader src={folheto} />,
  
  },
  {
    title: "Logo",
    description: "Identidade visual AUmigo",
    header: <ImageHeader src={logo} />,
  
  },
  {
    title: "Logotipo",
    description: "Variação do logotipo principal",
    header: <ImageHeader src={logotipo} />,
   
  },
  {
    title: "Paleta de Cores",
    description: "Identidade cromática da marca",
    header: <ImageHeader src={paleta} />,
    
  },
  {
    title: "Post Instagram",
    description: "Conteúdo para redes sociais",
    header: <ImageHeader src={postInsta} />,
   
  },
  
];
