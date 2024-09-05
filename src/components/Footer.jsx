import logo from "../assets/8.png"

function Footer() {
    return (
        <div className=" bg-mainTheme">

            <div className=" desktop:flex-row flex flex-col p-8 gap-2 desktop:space-y-0 space-y-10  ">

                <div className="desktop:w-1/3 w-full" >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d213.27066381147307!2d29.933711100014133!3d31.211568336631213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c54fd4daf0e9%3A0xc09356454de29114!2zR3JvdXBuYSBTdG9yZSBBbGV4YW5kcmlhINis2LHZiNio2YbYpyDYs9iq2YjYsSDYp9mE2KfYs9mD2YbYr9ix2YrZhw!5e0!3m2!1sen!2seg!4v1725456479940!5m2!1sen!2seg" height="350" allowfullscreen="" loading="lazy" className=" border-none w-[100%]" ></iframe>
                </div>

                <div className="desktop:w-1/3 desktop:max-w-1/3 text-white font-secondryFont space-y-1 desktop:space-y-5">
                    <h1 dir="rtl" lang="ar" className="font-mainFont text-xl">عناوين التواصل</h1>
                    <h2 dir="rtl" lang="ar" >العنوان : 12 شارع محمد علي , مصطفي كامل , الاسكندرية</h2>
                    <h2 dir="rtl" lang="ar">البريد الالكتروني : test@gmai.com</h2>
                    <h2 dir="rtl" lang="ar">رقم الهاتف :  0171231231231</h2>
                    <h2 dir="rtl" lang="ar"> رقم حساب التبرعات (بنك مصر) : 1231231232451123</h2>
                </div>


                <div className="desktop:w-1/3 flex flex-col desktop:items-end items-end">
                    <img src={logo} alt="logo" className="max-w-32 desktop:mr-10 mb-2"></img>
                    <h1 dir="rtl" lang="ar" className=" text-white font-mainFont text-xl">مؤسسة محمود فهمي درويش</h1>
                </div>
            </div>


            <div>
                <div></div>
                <div className="flex justify-between text-white  font-mainFont px-8 py-4  border-t-2 border-white desktop:text-base text-xs">
                    <h1 dir="rtl" lang="ar">صنع بواسطه 00</h1>
                    <h1 dir="rtl" lang="ar">موسسة خيرية مشهرة برقم 4147 سنة 2020 بالاسكندرية</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer