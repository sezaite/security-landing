import { useEffect, useState } from 'react';
import logo from '../../assets/img/icons/logo.svg'

const NAV_LINKS = [{id: 'features', name: 'Features', link: '#', }, {id: 'pricing', name: 'Pricing', link: '#', }, {id: 'apps', name: 'Apps', link: '#', }, {id: 'blog', name: 'Blog', link: '#', }, {id:'help', name: 'Help', link: '#', }];


export const Navigation = () => {

const [isScrolled, setIsScrolled] = useState(false);
const [isCollapsed, setIsCollapsed] = useState(true);

useEffect(()=>{
    window.addEventListener('scroll', ()=>{
        if (window.pageYOffset && !isScrolled) {
            setIsScrolled(true);
            return;
        } 
        if (!window.pageYOffset) {
            setIsScrolled(false);
            return;
        }   
    })
}, [])

useEffect(()=> {
    if(isCollapsed && document.body.classList.contains('filter-on')) {
        document.body.classList.remove('filter-on');
        return;
    } 
    if(!isCollapsed && !document.body.classList.contains('filter-on')) {
        document.body.classList.add('filter-on');
        return;
    } 
   
}, [isCollapsed]);


  return (
    <nav className={isScrolled ? 'main-nav scrolled' : 'main-nav'}>
        <div className="container">
        <a href="/" className='main-nav__logo'><img src={logo} alt="nord logo" /></a>
        <div className={isCollapsed ? 'main-nav__links collapsed' : 'main-nav__links'}>
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
        <button type='button' id="burger" className={isCollapsed ? 'main-nav__toggler collapsed' : 'main-nav__toggler'} onClick={()=>{setIsCollapsed(!isCollapsed)}}>
                <label htmlFor="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label> 
        </button>
        </div> 
    </nav>
  )
}

