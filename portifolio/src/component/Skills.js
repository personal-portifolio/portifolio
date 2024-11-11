import React from 'react';
import { FaHtml5, FaCss3, FaPython, FaJs, FaJava, FaPhp, FaNodeJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiMysql, SiDjango, SiSupabase } from 'react-icons/si';

const skillsData = [
    { icon: <FaHtml5 />, label: 'HTML' },
    { icon: <FaCss3 />, label: 'CSS' },
    { icon: <FaJs />, label: 'JavaScript' },
    { icon: <FaPython />, label: 'Python' },
    { icon: <FaJava />, label: 'Java' },
    { icon: <FaPhp />, label: 'PHP' },
    { icon: <FaNodeJs />, label: 'Node.js' },
    { icon: <FaReact />, label: 'React' },
    { icon: <SiTailwindcss />, label: 'Tailwind' },
    { icon: <SiFigma />, label: 'Figma' },
    { icon: <SiMysql />, label: 'SQL' },
    { icon: <SiDjango />, label: 'Django' },
    { icon: <FaGitAlt />, label: 'Git' },
    { icon: <SiSupabase />, label: 'Supabase' },
];

const SkillItem = ({ icon, label }) => (
    <div className='flex flex-col justify-center items-center'>
        <div className='text-[40px]'>{icon}</div>
        <span className='text-sm text-gray-200'>{label}</span>
    </div>
);

function Skills() {
    return (
        <>
            <div className='container mx-auto mt-10 text-center text-teal-400 text-2xl font-bold'>Skills</div>
            <div className='container mx-auto mt-5 text-gray-200 text-sm'>
                The skills, tools and technologies I am really good at:
            </div>
            <div className='container mt-5 flex justify-center items-center flex-wrap gap-5 mt-5 '>
                {skillsData.map((skill, index) => (
                    <SkillItem key={index} icon={skill.icon} label={skill.label} />
                ))}
            </div>
        </>
    );
}

export default Skills;