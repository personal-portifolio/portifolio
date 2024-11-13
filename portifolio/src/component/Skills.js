import React from 'react';
import { FaHtml5, FaCss3, FaPython, FaJs, FaJava, FaPhp, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiMysql } from 'react-icons/si';

const skillsData = [
    { icon: <FaHtml5 />, label: 'HTML' },
    { icon: <FaCss3 />, label: 'CSS' },
    { icon: <FaJs />, label: 'JavaScript' },
    { icon: <FaPython />, label: 'Python' },
    { icon: <FaJava />, label: 'Java' },
    { icon: <FaPhp />, label: 'PHP' },
    { icon: <FaReact />, label: 'React' },
    { icon: <SiTailwindcss />, label: 'Tailwind' },
    { icon: <SiFigma />, label: 'Figma' },
    { icon: <SiMysql />, label: 'SQL' },
    { icon: <FaGitAlt />, label: 'Git' },

];

const SkillItem = ({ icon, label }) => (
    <div className='flex flex-col items-center p-4 transition-transform transform hover:scale-105 bg-gray-900 rounded-lg shadow-md hover:shadow-lg'>
        <div className='text-[40px] text-teal-400'>{icon}</div>
        <span className='mt-2 text-sm text-gray-300'>{label}</span>
    </div>
);

function Skills() {
    return (
        <div className='bg-black  py-10'>
            <div className='container mx-auto text-center text-teal-500 text-3xl font-semibold'>
                Skills
            </div>
            
            <div className='container mx-auto mt-5 text-gray-400 text-sm'>
                The skills, tools, and technologies I am really good at:
            </div>
            
            <div className='flex justify-center gap-6 items-center flex-wrap mt-8'>
                {skillsData.map((skill, index) => (
                    <SkillItem key={index} icon={skill.icon} label={skill.label} />
                ))}
            </div>
        </div>
    );
}

export default Skills;