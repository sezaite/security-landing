import { useEffect, useState } from 'react';
import logo from '../../assets/img/icons/logo.svg'

const NAV_LINKS = [{id: 'features', name: 'Features', link: '#', }, {id: 'pricing', name: 'Pricing', link: '#', }, {id: 'apps', name: 'Apps', link: '#', }, {id: 'blog', name: 'Blog', link: '#', }, {id:'help', name: 'Help', link: '#', }];


export const Navigation = () => {

const [isScrolled, setIsScrolled] = useState(false);

useEffect(()=>{
    window.addEventListener('scroll', ()=>{
        // todo:

        if (!isScrolled && document.body.scrollTop === 0) {
            setIsScrolled(true);
        }
    })
}, [])
  return (

  

    <nav className={isScrolled ? 'main-nav scrolled' : 'main-nav'}>
        <div className="container">
        <a href="/" className='main-nav__logo'><img src={logo} alt="nord logo" /></a>
        <div className="main-nav__links">
            <ul>
                {
                    NAV_LINKS.map(({ id, name, link })=>(
        
                        <li key={id}><a href={link} className={'main-nav__link'} id={id}>{name}</a></li>
                    
                    ))
                }
                <li><a href="#" className='main-nav__link main-nav__link--account'>My account</a></li>
            
            </ul>
            <a href="#" className="button button--primary button--sm">Open Vault</a>
    
        </div>
        <button className="main-nav__toggler">
                <span></span>
                <span></span>
                <span></span>
        </button>
        </div> 
    </nav>
  )
}

