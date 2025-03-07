import Link from "next/link";
import {Button} from "./ui/button";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
return (
    <header className="fixed top-0 left-0 right-0 z-30 py-8 xl:py-12 text-white bg-primary">
        <div className="container mx-auto flex justify-between items-center">
            {/* logo*/}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Isaac <span className="text-accent">.</span>
                </h1>
            </Link>

             {/* Desktop navigation and hire me button*/}
             <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/contact">
                        <Button>Hire Me</Button>
                </Link>
             </div>


             {/* mobile navigation and hire me button*/}
             <div className="xl:hidden">
               <MobileNav />
             </div>
        </div>
    </header>
);
}

export default Header