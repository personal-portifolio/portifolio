import React from 'react';
import { motion } from 'framer-motion';
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
    <motion.div 
        className='flex flex-col items-center'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
            duration: 0.5,
            ease: "easeInOut"
        }}
        whileHover={{ 
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.2 }
        }}
    >
        <div className='text-[30px]'>{icon}</div>
        <span className='text-sm text-gray-200'>{label}</span>
    </motion.div>
);

function Skills() {
    return (
        <>
            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className='container mx-auto mt-14 text-center text-teal-400 text-xl font-semibold'
            >
                Skills
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className='container mx-auto mt-5 text-gray-200 text-sm'
            >
                The skills, tools and technologies I am really good at:
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                    duration: 0.7, 
                    delay: 0.5,
                    staggerChildren: 0.1 
                }}
                className=' flex justify-center gap-9 items-center flex-wrap  mt-5'
            >
                {skillsData.map((skill, index) => (
                    <SkillItem key={index} icon={skill.icon} label={skill.label} />
                ))}
            </motion.div>
        </>
    );
}

export default Skills;