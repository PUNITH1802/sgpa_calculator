"use client"
import React from 'react'
import { useState, useRef } from 'react'


const Page = () => {
    const [note, setnote] = useState(false)
    const tohide = useRef();
    const [formData, setformData] = useState(0);
    const [chemistry, setchemistry] = useState(false);
    const [physics, setphysics] = useState(false);
    const chemistry1 = useRef();
    const physics1=useRef();
    let chemistry88 = () => {
            setchemistry(true)
            tohide.current.style.display = "none";
        }
    let physics88 = () => {    
          setphysics(true)
            tohide.current.style.display = "none";
      
    }
    const refi11 = useRef()
    const refi21 = useRef()
    const refi31 = useRef()
    const refi41 = useRef()
    const refi51 = useRef()
    const refi61 = useRef()
    const refi71 = useRef()
    const refi81 = useRef()
    const refi91 = useRef()
    const refe110 = useRef()
    const refe210 = useRef()
    const refe310 = useRef()
    const refe410 = useRef()
    const refe510 = useRef()
    const refe610 = useRef()
    const refe710 = useRef()
    const refe810 = useRef()
    const refe910 = useRef()
    const refi110 = useRef()
    const refi210 = useRef()
    const refi310 = useRef()
    const refi410 = useRef()
    const refi510 = useRef()
    const refi610 = useRef()
    const refi710 = useRef()
    const refi810 = useRef()
    const refi910 = useRef()
    const refe11 = useRef()
    const refe21 = useRef()
    const refe31 = useRef()
    const refe41 = useRef()
    const refe51 = useRef()
    const refe61 = useRef()
    const refe71 = useRef()
    const refe81 = useRef()
    const refe91 = useRef()
    const red1 = useRef()
    const red2 = useRef()

    const HandleChange_chemistry_submit = () => {
        let math_total,chemistry_lab_total,chemistry_total,pps_lab_total,pps_total,dti_total,workshop_total,electronics_total,mechanical_total;
        if (parseInt(refi110.current.value)==50 && parseInt(refe110.current.value)==50) {
            math_total=parseInt((parseInt(refi110.current.value)+parseInt(refe110.current.value))/10)
        }else if(parseInt(refi110.current.value)<20 || refi110.current.value==""  || parseInt(refe110.current.value)<20 || refe110.current.value=="" ){
            math_total=0;
        }
        else{
            math_total=parseInt((parseInt(refi110.current.value)+parseInt(refe110.current.value))/10)+1
        }
        if (parseInt(refi210.current.value)==50 && parseInt(refe210.current.value)==50) {
            chemistry_total=parseInt((parseInt(refi210.current.value)+parseInt(refe210.current.value))/10)
        }else if(parseInt(refi210.current.value)<20 || refi210.current.value==""  || parseInt(refe210.current.value)<20 || refe210.current.value=="" ){
            chemistry_total=0;
        }
        else{
            chemistry_total=parseInt((parseInt(refi210.current.value)+parseInt(refe210.current.value))/10)+1
        }
        if (parseInt(refi310.current.value)==50 && parseInt(refe310.current.value)==50) {
            electronics_total=parseInt((parseInt(refi310.current.value)+parseInt(refe310.current.value))/10)
        }else if(parseInt(refi310.current.value)<20 || refi310.current.value==""  || parseInt(refe310.current.value)<20 || refe310.current.value=="" ){
            electronics_total=0;
        }
        else{
            electronics_total=parseInt((parseInt(refi310.current.value)+parseInt(refe310.current.value))/10)+1
        }
        if (parseInt(refi410.current.value)==50 && parseInt(refe410.current.value)==50) {
            mechanical_total=parseInt((parseInt(refi410.current.value)+parseInt(refe410.current.value))/10)
        }else if(parseInt(refi410.current.value)<20 || refi410.current.value==""  ||  parseInt(refe410.current.value)<20 || refe410.current.value=="" ){
            mechanical_total=0;
        }
        else{
            mechanical_total=parseInt((parseInt(refi410.current.value)+parseInt(refe410.current.value))/10)+1
        }
        if (parseInt(refi510.current.value)==50 && parseInt(refe510.current.value)==50) {
            pps_total=parseInt((parseInt(refi510.current.value)+parseInt(refe510.current.value))/10)
        }else if(parseInt(refi510.current.value)<20 || refi510.current.value=="" || parseInt(refe510.current.value)<20 || refe510.current.value=="" ){
            pps_total=0;
        }
        else{
            pps_total=parseInt((parseInt(refi510.current.value)+parseInt(refe510.current.value))/10)+1
        }
        if (parseInt(refi610.current.value)==50 && parseInt(refe610.current.value)==50) {
            chemistry_lab_total=parseInt((parseInt(refi610.current.value)+parseInt(refe610.current.value))/10)
        }else if(parseInt(refi610.current.value)<20 || refi610.current.value==""  || parseInt(refe610.current.value)<20 || refe610.current.value=="" ){
            chemistry_lab_total=0;
        }
        else{
            chemistry_lab_total=parseInt((parseInt(refi610.current.value)+parseInt(refe610.current.value))/10)+1
        }
        if (parseInt(refi710.current.value)==50 && parseInt(refe710.current.value)==50) {
            pps_lab_total=parseInt((parseInt(refi710.current.value)+parseInt(refe710.current.value))/10)
        }else if(parseInt(refi710.current.value)<20 || refi710.current.value==""  || parseInt(refe710.current.value)<20 || refe710.current.value=="" ){
            pps_lab_total=0;
        }
        else{
            pps_lab_total=parseInt((parseInt(refi710.current.value)+parseInt(refe710.current.value))/10)+1
        }
        if (parseInt(refi810.current.value)==50 && parseInt(refe810.current.value)==50) {
            workshop_total=parseInt((parseInt(refi810.current.value)+parseInt(refe810.current.value))/10)
        }else if(parseInt(refi810.current.value)<20 || refi810.current.value==""  || parseInt(refe810.current.value)<20 || refe810.current.value=="" ){
            workshop_total=0;
        }
        else{
            workshop_total=parseInt((parseInt(refi810.current.value)+parseInt(refe810.current.value))/10)+1
        }
        if (parseInt(refi910.current.value)==50 && parseInt(refe910.current.value)==50) {
            dti_total=parseInt((parseInt(refi910.current.value)+parseInt(refe910.current.value))/10)
        }
        else if(parseInt(refi910.current.value)<20 || refi910.current.value=="" || parseInt(refe910.current.value)<20 || refi110.current.value=="" ){
            dti_total=0;
        }
        else{
            dti_total=parseInt((parseInt(refi910.current.value)+parseInt(refe910.current.value))/10)+1
        }
        const sgpa01 = ((math_total*3+chemistry_total*3+pps_total*3+mechanical_total*3+electronics_total*3+pps_lab_total+chemistry_lab_total+workshop_total*2+dti_total)/ 20);
        if (sgpa01 > 0 && sgpa01 <= 10) {
            setformData(sgpa01);
            chemistry1.current.style.display = "none";
        }
        else {
            red2.current.style.backgroundColor = "red";
            setnote(true)
        }
     console.log((refi110.current.value)="");
    }
    const refresh=()=>{
        window.location.reload();
    }
    const HandleChange_physics_submit = () => {
        let math_total,physics_total,physics_lab_total,electrical_total,electrical_lab_total,media_total,english_total,mechanics_total,graphic_total;
        if (parseInt(refi11.current.value)==50 && parseInt(refe11.current.value)==50) {
            math_total=parseInt((parseInt(refi11.current.value)+parseInt(refe11.current.value))/10)
        }else if(parseInt(refi11.current.value)<20 || refi11.current.value==""  || parseInt(refe11.current.value)<20 || refe11.current.value=="" ){
            math_total=0;
        }
        else{
            math_total=parseInt((parseInt(refi11.current.value)+parseInt(refe11.current.value))/10)+1
        }
        if (parseInt(refi21.current.value)==50 && parseInt(refe21.current.value)==50) {
            physics_total=parseInt((parseInt(refi21.current.value)+parseInt(refe21.current.value))/10)
        }else if(parseInt(refi21.current.value)<20 || refi21.current.value==""  || parseInt(refe21.current.value)<20 || refe21.current.value=="" ){
            physics_total=0;
        }
        else{
            physics_total=parseInt((parseInt(refi21.current.value)+parseInt(refe21.current.value))/10)+1
        }
        if (parseInt(refi31.current.value)==50 && parseInt(refe31.current.value)==50) {
            electrical_total=parseInt((parseInt(refi31.current.value)+parseInt(refe31.current.value))/10)
        }else if(parseInt(refi31.current.value)<20 || refi31.current.value==""  || parseInt(refe31.current.value)<20 || refe31.current.value=="" ){
            electrical_total=0;
        }
        else{
            electrical_total=parseInt((parseInt(refi31.current.value)+parseInt(refe31.current.value))/10)+1
        }
        if (parseInt(refi41.current.value)==50 && parseInt(refe41.current.value)==50) {
            mechanics_total=parseInt((parseInt(refi41.current.value)+parseInt(refe41.current.value))/10)
        }else if(parseInt(refi41.current.value)<20 || refi41.current.value==""  ||  parseInt(refe41.current.value)<20 || refe41.current.value=="" ){
            mechanics_total=0;
        }
        else{
            mechanics_total=parseInt((parseInt(refi41.current.value)+parseInt(refe41.current.value))/10)+1
        }
        if (parseInt(refi51.current.value)==50 && parseInt(refe51.current.value)==50) {
            graphic_total=parseInt((parseInt(refi51.current.value)+parseInt(refe51.current.value))/10)
        }else if(parseInt(refi51.current.value)<20 || refi51.current.value=="" || parseInt(refe51.current.value)<20 || refe51.current.value=="" ){
            graphic_total=0;
        }
        else{
            graphic_total=parseInt((parseInt(refi51.current.value)+parseInt(refe51.current.value))/10)+1
        }
        if (parseInt(refi61.current.value)==50 && parseInt(refe61.current.value)==50) {
            physics_lab_total=parseInt((parseInt(refi61.current.value)+parseInt(refe61.current.value))/10)
        }else if(parseInt(refi61.current.value)<20 || refi61.current.value==""  || parseInt(refe61.current.value)<20 || refe61.current.value=="" ){
            physics_lab_total=0;
        }
        else{
            physics_lab_total=parseInt((parseInt(refi61.current.value)+parseInt(refe61.current.value))/10)+1
        }
        if (parseInt(refi71.current.value)==50 && parseInt(refe71.current.value)==50) {
            electrical_lab_total=parseInt((parseInt(refi71.current.value)+parseInt(refe71.current.value))/10)
        }else if(parseInt(refi71.current.value)<20 || refi71.current.value==""  || parseInt(refe71.current.value)<20 || refe71.current.value=="" ){
            electrical_lab_total=0;
        }
        else{
            electrical_lab_total=parseInt((parseInt(refi71.current.value)+parseInt(refe71.current.value))/10)+1
        }
        if (parseInt(refi81.current.value)==50 && parseInt(refe81.current.value)==50) {
            english_total=parseInt((parseInt(refi81.current.value)+parseInt(refe81.current.value))/10)
        }else if(parseInt(refi81.current.value)<20 || refi81.current.value==""  || parseInt(refe81.current.value)<20 || refe81.current.value=="" ){
            english_total=0;
        }
        else{
            english_total=parseInt((parseInt(refi81.current.value)+parseInt(refe81.current.value))/10)+1
        }
        if (parseInt(refi91.current.value)==50 && parseInt(refe91.current.value)==50) {
            media_total=parseInt((parseInt(refi91.current.value)+parseInt(refe91.current.value))/10)
        }
        else if(parseInt(refi91.current.value)<20 || refi91.current.value=="" || parseInt(refe91.current.value)<20 || refe91.current.value=="" ){
            media_total=0;
        }
        else{
            media_total=parseInt((parseInt(refi91.current.value)+parseInt(refe91.current.value))/10)+1
        }
        const sgpa01 = ((math_total*3+physics_total*3+graphic_total*3+mechanics_total*3+electrical_total*3+electrical_lab_total+physics_lab_total+english_total*2+media_total)/ 20);
        console.log(sgpa01);
        console.log(electrical_total);
        if (sgpa01 > 0 && sgpa01 <= 10) {
            setformData(sgpa01);
            physics1.current.style.display = "none";
        }
        else {
            console.log("done")
            red1.current.style.backgroundColor = "red";
            setnote(true)
        }

    }

    return (
        <>
            <div ref={tohide} className=' bg-white   top-[20%] h-screen flex items-center justify-center'>
                <div className='m-10 border drop-shadow-md w-4/5 h-2/3  flex flex-col items-center bg-[#f7f7f7] justify-center gap-6'>
                    <div className="text-2xl text-black font-serif">SELECT YOUR CYCLE</div>
                    <button onClick={chemistry88} className='bg-black px-5 py-2 w-[60%] text-white font-bold'>CHEMISTRY</button>
                    <button onClick={physics88} className='bg-black px-5 py-2 w-[60%] text-white font-bold'>PHYSICS</button>
                </div>
            </div>
            {chemistry && <div ref={chemistry1} className='  h-screen flex bg-white  items-center justify-center  '>
                <div className='m-10   border drop-shadow-md   w-4/5 h-4/5  hide-scrollbar overflow-scroll flex flex-col items-center bg-[#f7f7f7]  p-3'>

                   <div> <div className='text-sm font-semibold m-2 font-serif '>MATHEMATICS</div>
                    <div className='flex m-2 gap-4'>
                        <div className='sm:flex sm:justify-around sm:align-middle'><div>
                            <input type="text" ref={refi110}  placeholder='Internal marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                        </div></div>
                        <div className='sm:flex sm:justify-center sm:align-middle'><div>
                            <input type="text" ref={refe110}  placeholder='External marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                        </div>
                        </div>
                    </div></div>
                    <div><div className='text-sm font-semibold m-2 font-serif '>CHEMISTRY</div>
                        <div className='flex m-2 gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                <input type="text" ref={refi210} placeholder='Internal marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                <input type="text" ref={refe210} placeholder='External marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                            </div></div>
                        </div>
                    </div>
                    <div><div className='text-sm font-semibold m-2 font-serif '>ELECTRONICS</div>
                        <div className='flex m-2 gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                <input type="text" ref={refi310} placeholder='Internal marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                <input type="text" ref={refe310} placeholder='External marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                            </div></div>
                        </div>
                    </div>
                    <div><div className='text-sm font-semibold m-2 font-serif '>MECHANICAL</div>
                        <div className='flex m-2 gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                <input type="text" ref={refi410} placeholder='Internal marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                <input type="text" ref={refe410} placeholder='External marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                            </div></div>
                        </div>
                    </div>
                    <div><div className='text-sm font-semibold m-2 font-serif '>PPS</div>
                        <div className='flex m-2 gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                <input type="text" ref={refi510} placeholder='Internal marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                <input type="text" ref={refe510} placeholder='External marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                            </div></div>
                        </div>
                        <div><div className='text-sm font-semibold m-2 font-serif '>CHEMISTRY LAB</div>
                            <div className='flex m-2 gap-4'>
                                <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                    <input type="text" ref={refi610} placeholder='Internal marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                                </div></div>
                                <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                    <input type="text" ref={refe610} placeholder='External marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                                </div></div>
                            </div>
                        </div>
                        <div><div className='text-sm font-semibold m-2 font-serif '>PPS LAB</div>
                            <div className='flex m-2 gap-4'>
                                <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                    <input type="text" ref={refi710} placeholder='Internal marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                                </div></div>
                                <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                    <input type="text" ref={refe710} placeholder='External marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                                </div></div>
                            </div>
                        </div>
                        <div><div className='text-sm font-semibold m-2 font-serif '>WORKSHOP</div>
                            <div className='flex m-2 gap-4'>
                                <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                    <input type="text" ref={refi810} placeholder='Internal marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                                </div></div>
                                <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                    <input type="text" ref={refe810} placeholder='External marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                                </div></div>
                            </div>
                        </div>
                        <div><div className='text-sm font-semibold m-2 font-serif '>DTI</div>
                            <div className='flex m-2 gap-4'>
                                <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                    <input type="text" ref={refi910} placeholder='Internal marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                                </div></div>
                                <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                    <input type="text" ref={refe910} placeholder='Internal marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />

                                </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='grid place-content-center  my-4'>
                                <button onClick={HandleChange_chemistry_submit} ref={red2} className='bg-black  text-white text-xl font-semibold py-2 px-4  '>SUBMIT</button>
                                {note && <  div className='font-serif'><h1 className='text-red-600 '>*Note</h1><div>Please Enter Proper Marks</div>Internal is for 50 and External is for 50</div>}
                            </div>
                </div>
                   </div>}
            {physics && <div ref={physics1} className=' h-screen flex bg-white  items-center justify-center'>
                <div className='m-10   border drop-shadow-md   w-4/5 h-4/5 hide-scrollbar overflow-scroll flex flex-col items-center bg-[#f7f7f7]  p-3'>
                        <div ><div><div className='text-sm font-semibold m-2 font-serif'>MATHEMATICS</div>
                            <div className='flex m-2 gap-4'>
                                <div className='sm:flex sm:justify-around sm:align-middle'><div>

                                    <input type="text" ref={refi11} placeholder='Internal marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                                </div></div>
                                <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                    <input type="text" ref={refe11} placeholder='External marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                                </div></div>
                            </div>
                        </div>
                            <div><div className='text-sm font-semibold m-2 font-serif '>PHYSICS</div>
                                <div className='flex m-2 gap-4'>
                                    <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                        <input type="text" ref={refi21} placeholder='Internal marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                                    </div></div>
                                    <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                        <input type="text" ref={refe21} placeholder='External marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                                    </div></div>
                                </div>
                            </div>
                            <div><div className='text-sm font-semibold m-2 font-serif '>ELECTRICAL</div>
                                <div className='flex m-2 gap-4'>
                                    <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                        <input type="text" ref={refi31} placeholder='Internal marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                                    </div></div>
                                    <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                        <input type="text" ref={refe31} placeholder='External marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                                    </div></div>
                                </div>
                            </div>
                            <div><div className='text-sm font-semibold m-2 font-serif '>MECHANICS</div>
                                <div className='flex m-2 gap-4'>
                                    <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                        <input type="text" ref={refi41} placeholder='Internal marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                                    </div></div>
                                    <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                        <input type="text" ref={refe41} placeholder='External marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                                    </div></div>
                                </div>
                            </div>
                            <div><div className='text-sm font-semibold m-2 font-serif '>GRAPHICS</div>
                                <div className='flex m-2 gap-4'>
                                    <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                        <input type="text" ref={refi51} placeholder='Internal marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                                    </div></div>
                                    <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                        <input type="text" ref={refe51} placeholder='External marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                                    </div></div>
                                </div>
                            </div>
                            <div><div className='text-sm font-semibold m-2 font-serif '>PHYSICS LAB</div>
                                <div className='flex m-2 gap-4'>
                                    <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                        <input type="text" ref={refi61} placeholder='Internal marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                                    </div></div>
                                    <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                        <input type="text" ref={refe61} placeholder='External marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                                    </div></div>
                                </div>
                            </div>
                            <div><div className='text-sm font-semibold m-2 font-serif '>ELECTRICAL LAB</div>
                                <div className='flex m-2 gap-4'>
                                    <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                        <input type="text" ref={refi71} placeholder='Internal marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                                    </div></div>
                                    <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                        <input type="text" ref={refe71} placeholder='External marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                                    </div></div>
                                </div>
                            </div>
                            <div><div className='text-sm font-semibold m-2 font-serif '>ENGLISH</div>
                                <div className='flex m-2 gap-4'>
                                    <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                        <input type="text" ref={refi81} placeholder='Internal marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                                    </div></div>
                                    <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                        <input type="text" ref={refe81} placeholder='External marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                                    </div></div>
                                </div>
                            </div>
                            <div><div className='text-sm font-semibold m-2 font-serif '>MEDIA PRESENTATION</div>
                                <div className='flex m-2 gap-4'>
                                    <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                        <input type="text" ref={refi91} placeholder='Internal marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />
                                    </div></div>
                                    <div className='sm:flex sm:justify-center sm:align-middle'><div>

                                        <input type="text" ref={refe91} placeholder='External marks' className='border text-[10px] sm:w-[100%] border-black px-4 py-2' />

                                    </div>
                                    </div>
                                </div></div>
                            <div className='grid place-content-center  my-4'>
                                <button ref={red1} onClick={HandleChange_physics_submit} className='bg-black  text-white text-xl font-semibold py-2 px-4  '>SUBMIT</button>
                                {note && <  div className='font-serif'><h1 className='text-red-600 '>*Note</h1><div>Please Enter Proper Marks</div>Internal is for 50 and External is for 50</div>}
                            </div>
                        </div>
                
               
            </div>
            </div>}
            {(formData > 0 && formData <= 10) && <><div className='bg-white   top-[20%] h-screen flex items-center justify-center'>
                <div className='m-10 border drop-shadow-md w-4/5 h-2/3 flex flex-col items-center bg-[#f7f7f7] justify-center gap-5'>
                    
                        <div className='text-3xl font-bold '>Your SGPA is:</div>
                        <div className='text-6xl font-bold text-center '>{formData}</div>
                        <button onClick={refresh} className='border rounded-full text-black font-bold font-serif  bg-white px-6 py-3'>HOME</button>
                    </div>
            </div> </>}

        </>
    )
}

export default Page 