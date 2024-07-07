import { useState } from "react";
import { BadgeAlert, BadgeCheck, ThumbsDown, ThumbsUp, FileVideo2,  Files, FileText, Mail, PhoneCall, Filter, Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { BreadcrumMenu } from "./BreadCrumbMain"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import prof from "@/assets/image/professora.png";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "../ui/menubar";

export const Main = () => {

    const dateStrings = [
        "Tue Jul 02 2024 19:46:28 GMT-0300 (Horário Padrão de Brasília)",
        "Tue Jul 09 2024 19:46:28 GMT-0300 (Horário Padrão de Brasília)",
        "Tue Jul 16 2024 19:46:28 GMT-0300 (Horário Padrão de Brasília)",
        "Tue Jul 23 2024 19:46:28 GMT-0300 (Horário Padrão de Brasília)"
    ];
    
    const dateObjects = dateStrings.map(dateString => new Date(dateString));

    const [date, setDate] = useState<Date[] | undefined>(dateObjects);

    const aulas = [
        {
            title: "Nome da Aula1",
            date: "04 de Junho",
            type: "online",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corporis amet voluptatem officiis iste? Voluptates mollitia qui iusto asperiores molestiae voluptatibus, velit corrupti eligendi excepturi ex repellat tempore laboriosam cumque.",
            status: true,
            id: 1,
            smallDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corporis amet voluptatem officiis iste?",
            content: [
                {
                    title: "video aula",
                    icon: "FileVideo2"
                },
                {
                    title: "powerpoint",
                    icon: "Files"
                },
                {
                    title: "pdf",
                    icon: "FileText"
                }
            ]
        },
        {
            title: "Nome da Aula2",
            date: "11 de Junho",
            type: "presencial",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corporis amet voluptatem officiis iste? Voluptates mollitia qui iusto asperiores molestiae voluptatibus, velit corrupti eligendi excepturi ex repellat tempore laboriosam cumque.",
            status: true,
            id:2,
            smallDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corporis amet voluptatem officiis iste?",
            content: [
                {
                    title: "video aula",
                    icon: "FileVideo2"
                },
                {
                    title: "powerpoint",
                    icon: "Files"
                },
                {
                    title: "pdf",
                    icon: "FileText"
                }
            ]
        },
        {
            title: "Nome da Aula3",
            date: "18 de Junho",
            type: "online",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corporis amet voluptatem officiis iste? Voluptates mollitia qui iusto asperiores molestiae voluptatibus, velit corrupti eligendi excepturi ex repellat tempore laboriosam cumque.",
            status: false,
            id:3,
            smallDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corporis amet voluptatem officiis iste?",
            content: [
                {
                    title: "video aula",
                    icon: "FileVideo2"
                },
                {
                    title: "powerpoint",
                    icon: "Files"
                },
                {
                    title: "pdf",
                    icon: "FileText"
                }
            ]
        },
        {
            title: "Nome da Aula4",
            date: "25 de Junho",
            type: "presencial",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corporis amet voluptatem officiis iste? Voluptates mollitia qui iusto asperiores molestiae voluptatibus, velit corrupti eligendi excepturi ex repellat tempore laboriosam cumque.",
            status: false,
            id:4,
            smallDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corporis amet voluptatem officiis iste?",
            content: [
                {
                    title: "video aula",
                    icon: "FileVideo2"
                },
                {
                    title: "powerpoint",
                    icon: "Files"
                },
                {
                    title: "pdf",
                    icon: "FileText"
                }
            ]
        },
        {
            title: "Nome da Aula5",
            date: "02 de Julho",
            type: "online",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corporis amet voluptatem officiis iste? Voluptates mollitia qui iusto asperiores molestiae voluptatibus, velit corrupti eligendi excepturi ex repellat tempore laboriosam cumque.",
            status: true,
            id:5,
            smallDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corporis amet voluptatem officiis iste?",
            content: [
                {
                    title: "video aula",
                    icon: "FileVideo2"
                },
                {
                    title: "powerpoint",
                    icon: "Files"
                },
                {
                    title: "pdf",
                    icon: "FileText"
                }
            ]
        },
        {
            title: "Nome da Aula6",
            date: "02 de Julho",
            type: "presencial",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corporis amet voluptatem officiis iste? Voluptates mollitia qui iusto asperiores molestiae voluptatibus, velit corrupti eligendi excepturi ex repellat tempore laboriosam cumque.",
            status: true,
            id:6,
            smallDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corporis amet voluptatem officiis iste?",
            content: [
                {
                    title: "video aula",
                    icon: "FileVideo2"
                },
                {
                    title: "powerpoint",
                    icon: "Files"
                },
                {
                    title: "pdf",
                    icon: "FileText"
                }
            ]
        },
        {
            title: "Nome da Aula7",
            date: "02 de Julho",
            type: "online",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corporis amet voluptatem officiis iste? Voluptates mollitia qui iusto asperiores molestiae voluptatibus, velit corrupti eligendi excepturi ex repellat tempore laboriosam cumque.",
            status: true,
            id:7,
            smallDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corporis amet voluptatem officiis iste?",
            content: [
                {
                    title: "video aula",
                    icon: "FileVideo2"
                },
                {
                    title: "powerpoint",
                    icon: "Files"
                },
                {
                    title: "pdf",
                    icon: "FileText"
                }
            ]
        },
        {
            title: "Nome da Aula8",
            date: "02 de Julho",
            type: "presencial",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corporis amet voluptatem officiis iste? Voluptates mollitia qui iusto asperiores molestiae voluptatibus, velit corrupti eligendi excepturi ex repellat tempore laboriosam cumque.",
            status: true,
            id:8,
            smallDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corporis amet voluptatem officiis iste?",
            content: [
                {
                    title: "video aula",
                    icon: "FileVideo2"
                },
                {
                    title: "powerpoint",
                    icon: "Files"
                },
                {
                    title: "pdf",
                    icon: "FileText"
                }
            ]
        },
        {
            title: "Nome da Aula9",
            date: "02 de Julho",
            type: "online",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corporis amet voluptatem officiis iste? Voluptates mollitia qui iusto asperiores molestiae voluptatibus, velit corrupti eligendi excepturi ex repellat tempore laboriosam cumque.",
            status: false,
            id:9,
            smallDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corporis amet voluptatem officiis iste?",
            content: [
                {
                    title: "video aula",
                    icon: "FileVideo2"
                },
                {
                    title: "powerpoint",
                    icon: "Files"
                },
                {
                    title: "pdf",
                    icon: "FileText"
                }
            ]
        },
        {
            title: "Nome da Aula10",
            date: "02 de Julho",
            type: "presencial",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corporis amet voluptatem officiis iste? Voluptates mollitia qui iusto asperiores molestiae voluptatibus, velit corrupti eligendi excepturi ex repellat tempore laboriosam cumque.",
            status: true,
            id:10,
            smallDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corporis amet voluptatem officiis iste?",
            content: [
                {
                    title: "video aula",
                    icon: "FileVideo2"
                },
                {
                    title: "powerpoint",
                    icon: "Files"
                },
                {
                    title: "pdf",
                    icon: "FileText"
                }
            ]
        },
        {
            title: "Nome da Aula11",
            date: "02 de Julho",
            type: "online",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corporis amet voluptatem officiis iste? Voluptates mollitia qui iusto asperiores molestiae voluptatibus, velit corrupti eligendi excepturi ex repellat tempore laboriosam cumque.",
            status: false,
            id:11,
            smallDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corporis amet voluptatem officiis iste?",
            content: [
                {
                    title: "video aula",
                    icon: "FileVideo2"
                },
                {
                    title: "powerpoint",
                    icon: "Files"
                },
                {
                    title: "pdf",
                    icon: "FileText"
                }
            ]
        },
        {
            title: "Nome da Aula12",
            date: "02 de Julho",
            type: "presencial",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corporis amet voluptatem officiis iste? Voluptates mollitia qui iusto asperiores molestiae voluptatibus, velit corrupti eligendi excepturi ex repellat tempore laboriosam cumque.",
            status: true,
            id:12,
            smallDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corporis amet voluptatem officiis iste?",
            content: [
                {
                    title: "video aula",
                    icon: "FileVideo2"
                },
                {
                    title: "powerpoint",
                    icon: "Files"
                },
                {
                    title: "pdf",
                    icon: "FileText"
                }
            ]
        },
    ];

    const icons = {
        FileVideo2,  
        Files, 
        FileText
    };

    console.log(date);
    

    return (
        <main>
            <BreadcrumMenu />
            <div className="h-full flex gap-5">
                <div className="flex flex-col gap-5 w-[400px]">
                    <h1 className="font-bold text-4xl">Design de Interação</h1>
                    <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum atque fuga molestias, voluptate quisquam esse dolorem eligendi possimus.</p>
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage src={prof} />
                            <AvatarFallback>LL</AvatarFallback>
                        </Avatar>
                        <h2 className="text-base font-semibold">Profº Ma Leila Laís Gonçalves</h2>
                        <Mail className="text-blue-500 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110" />
                        <PhoneCall className="text-green-500 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110" size={21}/>
                    </div>
                    <div className="">
                        <Calendar 
                            mode="multiple"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border shadow w-fit"
                        />
                    </div>
                </div>
                <div className="flex-1 h-full">
                    <div className="w-[700px] flex justify-end items-center mb-5">
                        <Input
                            className=""
                            placeholder="Pesquisar Aulas"
                        />
                        <Menubar className="absolute">
                            <MenubarMenu>
                                <MenubarTrigger className="cursor-pointer"><Filter size={20} /></MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem className="cursor-pointer">Aulas Online</MenubarItem>
                                    <MenubarItem className="cursor-pointer">Aulas Presenciais</MenubarItem>
                                    <MenubarItem className="cursor-pointer">Aulas por Mês</MenubarItem>
                                    <MenubarItem className="cursor-pointer">Atividades</MenubarItem>
                                    <MenubarItem className="cursor-pointer">Avaliações</MenubarItem>
                                    <MenubarItem className="cursor-pointer flex justify-between">Todas <Check size={18} className="text-green-600" /></MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                        
                    </div>
                    <Accordion type="single" collapsible className="w-[700px]">
                        {aulas.map(item => (
                            <AccordionItem value={item.title} key={item.id}>
                                <AccordionTrigger>
                                    <HoverCard openDelay={400}>
                                        <HoverCardTrigger>
                                                <div className="flex">
                                                    <p className="w-full flex">
                                                        {item.status &&
                                                            <BadgeCheck className="mr-5 text-green-500"/>
                                                        }
                                                        {!item.status &&
                                                            <BadgeAlert className="mr-5 text-orange-500"/>
                                                        }
                                                        {item.title} - {item.date} - {item.type}
                                                    </p>
                                                </div>
                                        </HoverCardTrigger>
                                        <HoverCardContent className="w-[500px]">
                                            <div className="flex gap-5">
                                                <Avatar>
                                                    <AvatarImage src="https://github.com/vercel.png" />
                                                    <AvatarFallback>VC</AvatarFallback>
                                                </Avatar>
                                                <div className="flex flex-col gap-1">
                                                    <h4 className="text-sm font-semibold flex justify-start">{item.title}</h4>
                                                    <p className="flex justify-start">{item.date}</p>
                                                    <p className="text-xs flex justify-start text-start">{item.smallDescription}</p>
                                                    {item.status &&
                                                        <p className="flex items-center gap-2 text-green-500">
                                                            Aula Completada! 
                                                            <ThumbsUp size={18} />
                                                        </p>
                                                    }
                                                    {!item.status &&
                                                        <p className="flex items-center gap-2 text-red-500">
                                                            Aula Incompleta! 
                                                            <ThumbsDown size={18} />
                                                        </p>
                                                    }
                                                </div>
                                            </div>
                                        </HoverCardContent>
                                    </HoverCard>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex flex-col gap-10">
                                        {item.description}
                                        {item.content.map((item, index) => {
                                            const Icon = icons[item.icon as keyof typeof icons]
                                            return (
                                                <div key={index} className="cursor-pointer text-lg font-semibold text-blue-600 underline flex gap-2 items-center">
                                                    {item.icon && <Icon />}
                                                    {item.title}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </main>
    );
};