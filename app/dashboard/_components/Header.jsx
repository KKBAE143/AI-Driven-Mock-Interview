"use client";
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

function Header() {
    const path = usePathname();

    useEffect(() => {
        console.log(path);
    }, [path]);

    return (
        <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
            <Image src='/logo.svg' width={160} height={100} alt='logo' />
            <ul className='hidden md:flex gap-6'>
                <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard' ? 'text-primary font-bold' : ''}`}>
                    <Link href='/dashboard'>
                        Dashboard
                    </Link>
                </li>
                <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/questions' ? 'text-primary font-bold' : ''}`}>
                    <Link href='https://ai-course-generator-six.vercel.app/'>
                        AI Course Generator
                    </Link>
                </li>
                <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/upgrade' ? 'text-primary font-bold' : ''}`}>
                    <Link href='https://ai-mockup.vercel.app/'>
                        AI Mock Interview
                    </Link>
                </li>
                <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/upgrade' ? 'text-primary font-bold' : ''}`}>
                    <Link href='https://ai-mentor-tau.vercel.app/'>
                        AI Mentor
                    </Link>
                </li>
                <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/how' ? 'text-primary font-bold' : ''}`}>
                    <Link href='/dashboard/upgrade'>
                        Upgrade
                    </Link>
                </li>
                
            </ul>
            <UserButton />
        </div>
    );
}

export default Header;
