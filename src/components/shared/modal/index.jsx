/*
showTitle = true, false
title = set modal title
childern = send design of modal
footer = true, false
open = true, false
close = ()=>setOpen(false)
*/
import Button from '../button'

const Modal = ({open=false, showTitle=true, title="Modal Title", description="Modal content Here", footer="true"})=>{
    return (
        <>
            {
                open &&
                <div className="animate__animated animate__fadeIn fixed top-0 left-0 w-full min-h-screen flex items-center justify-center bg-[grey]">
                <div className="animate__animated animate__zoomIn relative w-[400px] bg-[white] py-2 px-4 rounded">
                    <button className='absolute top-0 right-2'>
                        <div>
                            <i className='fa fa-close'></i>
                        </div>
                    </button>
                    {
                        showTitle && <h1 className="font-semibold text-lg">{title}</h1>
                    }
                        <div className='flex flex-col gap-3'>
                            <p>
                                {description}
                            </p>
                            {
                                footer &&
                                <div className='flex gap-2 justify-end'>
                                    <Button size='small' color='success'>Ok</Button>
                                    <Button size='small' color='danger'>Cancel</Button>
                                </div> 
                            }  
                        </div>  
                </div>
                </div>
            }
        </>
    )
}

export default Modal