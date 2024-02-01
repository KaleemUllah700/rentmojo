import Button from '../button'
import { Link } from 'react-router-dom'
import Logo from '../logo'
import {useState} from 'react'
import Modal from '../modal'
const Layout = ({children})=>{

const [open, setOpen] = useState(false)

const menus = [
    {
        path: '/about-us',
        label: 'About Us'
    },
    {
        path: '/culture',
        label: 'Culture'
    },
    {
        path: '/inverstors',
        label: 'Inverstors'
    },
    {
        path: '/careers',
        label: 'Careers'
    },
    {
        path: '/contact',
        label: 'Contact'
    },
    {
        path: '/our-benefits',
        label: 'Our Benefits'
    },
    {
        path: '/sitemap',
        label: 'Sitemap'
    },
    {
        path: '/landlords',
        label: 'Landlords'
    }
]
const informations = [
    {
        path: '/blog',
        label: 'Blog'
    },
    {
        path: '/support-home',
        label: 'Support Home'
    },
    {
        path: '/documents-required',
        label: 'Documents Required'
    },
    {
        path: '/annual-returns',
        label: 'Annual Returns'
    }
]
const policies = [
    {
        path: '/shipping-policy',
        label: 'Shipping Policy'
    },
    {
        path: '/cancellation-return',
        label: 'Cancellation & Return'
    },
    {
        path: '/privacy-policy',
        label: 'Privacy Policy'
    },
    {
        path: '/rental-terms-conditions',
        label: 'Rental Terms & Conditions'
    },
    {
        path: '/referral-terms-conditions',
        label: 'Referral Terms & Conditions'
    }
]
const socials = [
    {
        icon: 'fa fa-facebook',
        link: 'https//:facebook.com'
    },
    {
        icon: 'fa fa-twitter',
        link: 'https//:twitter.com'
    },
    {
        icon: 'fa fa-linkedin',
        link: 'https//:linkedin.com'
    },
    {
        icon: 'fa fa-youtube',
        link: 'https//:youtube.com'
    },
    {
        icon: 'fa fa-instagram',
        link: 'https//:instagram'
    },
    {
        icon: 'fa fa-globe',
        link: 'https//:google.com'
    }
]

    return(
        <div>
            <nav className="bg-[white] h-[70px] px-16 py-2 shadow-xl flex items-center gap-4">
                <button>
                    <Logo />
                </button>
                    <button  className="flex items-center gap-2">
                        <span>Bangalore</span>
                        <i className="fa fa-angle-down"></i>
                    </button>
                <form>
                    <input type="search" name="search" className="w-[650px] h-[45px] border-2 border-zinc-300 px-4 rounded-xl" placeholder="Search For Products"/>
                </form>
                <button className="flex items-center gap-2 text-lg opacity-50">
                    <i className="fa fa-shopping-cart"></i>
                    <span>Cart</span>
                </button>
                <Button size='small' variant='solid' color='danger' onClick={()=>setOpen(true)} >LOGIN/SIGNUP</Button>
            </nav>
            <section className="p-4">
                {children}
            </section>

            <footer>
               <div className='grid md:grid-cols-4 bg-[white] mx-12 p-4'>
                <div className='px-8'>
                    <h1 className='font-semibold py-4 opacity-70'>RENTOMOJO</h1>
                    <ul className='flex flex-col gap-3 opacity-60'>
                        {
                        menus.map((menu, index)=>(
                            <li key={index}><Link to={menu.path}>{menu.label}</Link></li>
                        ))
                        }
                    </ul>
                </div>
                <div className='px-8'>
                    <h1 className='font-semibold py-4 opacity-70'>INFORMATION</h1>
                    <ul className='flex flex-col gap-3 opacity-60'>
                        {
                        informations.map((information, index)=>(
                            <li key={index}><Link to={information.path}>{information.label}</Link></li>
                        ))
                        }
                    </ul>
                </div>
                <div className='px-8'>
                    <h1 className='font-semibold py-4 opacity-70'>POLICIES</h1>
                    <ul className='flex flex-col gap-3 opacity-60'>
                        {
                        policies.map((policie, index)=>(
                            <li key={index}><Link to={policie.path}>{policie.label}</Link></li>
                        ))
                        }
                    </ul>
                </div>
                <div className='px-8'>
                    <h1 className='font-semibold py-4 opacity-70'>NEED HELP ?</h1>
                    <div className='flex items-center gap-4'>
                        <i className='fa fa-envelope-o opacity-70'></i>
                        <button>
                        <span className='opacity-60'>jo@rentomojo.com</span>
                        </button>
                    </div>
                    <div className='flex flex-col gap-2 py-4'>
                        <h1 className='opacity-70'>DOWNLOAD APP</h1>
                        <button>
                            <img src='images/app.png' alt='app' />
                        </button>
                    </div>
                </div>
               </div>
               <div className='grid md:grid-cols-3 bg-[white] p-4 my-8'>
                    <div className='px-16'>
                        <span className='opacity-60'>© 2024. Edunetwork Pvt. Ltd.</span>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        {
                            socials.map((social, index)=>(
                                <button key={index} className='border border-current rounded-full w-[30px] h-[30px] opacity-60'>
                                    <i className={social.icon}></i>
                                </button>
                            ))
                        }
                    </div>
                    <div className='flex justify-end px-6 opacity-60'>
                        <button className='flex items-center gap-2'>
                            <span>Go Up</span>
                            <i className='fa fa-angle-up'></i>
                        </button>
                    </div>
                </div>
            </footer>
            <Modal 
                open={open} 
                close={()=>setOpen(false)} 
                title='Register'
                footer={false}
            >
                <form>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-md font-semibold'>Full Name</label>
                            <input 
                                type="text" 
                                name="fullname" 
                                className='w-full border rounded p-2' 
                                placeholder='name' 
                                required 
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-md font-semibold'>Mobile No.</label>
                            <input
                                type="number"
                                name="number"
                                className='w-full border rounded p-2' 
                                placeholder='mobile no.' 
                                required 
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-md font-semibold'>Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                className='w-full border rounded p-2' 
                                placeholder='email' 
                                required 
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-md font-semibold'>Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                className='w-full border rounded p-2' 
                                placeholder='password' 
                                required 
                            />
                        </div>
                        <button className='w-full bg-[blue] rounded p-2'>
                            <input 
                                type="submit" 
                                value="signup" 
                                className='text-white font-semibold text-md'
                            />
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default Layout