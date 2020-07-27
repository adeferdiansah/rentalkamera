import Link from 'next/link'; 
function Menu() { 
    return ( 
        <div> 
            <nav>
                <ul>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/tentang"><a>Tentang Kami</a></Link>
                </li>
                <li>
                    <Link href="/hargarental"><a>Harga</a></Link>
                </li>
                </ul>
            </nav>
        </div>
    );
    }
    export default Menu;    