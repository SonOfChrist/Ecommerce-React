export const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-36 mt-20 w-full  bg-green-900">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-14">
                <div className="md:max-w-96">
                    <img className="w-36 h-auto" src="#" alt="logo" />
                    <p className="mt-6 text-sm">
                        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                        <img src="" alt="google play" className="h-9 w-auto " />
                        <img src="#"alt="app store" className="h-9 w-auto " />
                    </div>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    <div>
                        <h2 className="font-semibold mb-5">Ecommerce Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+254-743-587-157</p>
                            <p>Company Contact</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-sm pb-5">
                Copyright {new Date().getFullYear()} © MochogeStanley. All Right Reserved.
            </p>
        </footer>
  )
}

