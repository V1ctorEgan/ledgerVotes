import { Link } from 'react-router-dom';
import { Vote, Lock,Wallet ,  ContactIcon,
  NotebookIcon,
  WorkflowIcon, } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { connectWallet } from '../utils/smartContractFun';
 import logo from "../assets/logo.png"
export default function Navbar() {

  let Navigate = useNavigate()


  const navItems = [
  { path: '#howitworks', name: 'How IT Works', icon: WorkflowIcon },
  { path: '#contact', name: 'Contact', icon: ContactIcon },
  { path: '#actions', name: 'Actions', icon: NotebookIcon },
];


let handleConnect = async () => {
  try {
    const account = await connectWallet();
    console.log('Connected account:', account);
    Navigate('/choose');
  } catch (error) {
    console.error('Connection failed:', error);
    alert('Failed to connect wallet: ' + error.message);
  }
}




  return (
    <nav className="backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 py-2 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-navy-600 p-2 rounded-lg  ">
              {/* <Vote className="w-5 h-5 text-white" /> */}
              <img src={logo} alt="LedgerVote Logo" className="w-10 h-10"  />
            </div>
            <span className="text-2xl font-bold text-navy-800">LedgerVote</span>
          </Link>




          
          <nav className="hidden md:flex items-center gap-3   px-2 py-1 rounded-full ">
            {navItems.map((item) => (
              <div className='' key={item.name}>
                <a
                  href={item.path}
                  className={
                    `px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all 
                     hover:text-black/60 hover:bg-white/6`
                  }
                >
                  <item.icon size={16} />
                  {item.name}
                </a>
              </div>
            ))}
          </nav>












{/* 
          <div className="flex items-center space-x-4">
            <Link to="/join" className="text-navy-600 hover:text-navy-800 font-medium transition-colors">
              Join Election
            </Link>
            <Link to="/admin" className="btn-primary flex items-center space-x-2">
              <Lock className="w-4 h-4" />
              <span>Admin</span>
            </Link>
          </div> */}

               <motion.button
                aria-label="Connect wallet"
                onClick={handleConnect}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative  bg-green-600 px-5 py-2 rounded-2xl font-bold text-white  overflow-hidden"

              >
                {/* <div className="absolute inset-0 rounded-2xl bg-black/0  hover:bg-black/25 transition-all pointer-events-none" /> */}
                {/* <span className="flex items-center gap-2 relative z-10">
                  <Wallet size={16} /> <span className="hidden sm:inline">Connect Wallet</span>
                </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" /> */}
                <span className="relative z-10 flex items-center gap-2">
           <Wallet size={16} /> <span className="hidden sm:inline">Connect Wallet</span>
   
        </span>
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>
        </div>
      </div>
    </nav>
  );
}
