import Nav from '../components/nav'
import { faReceipt, faFolderOpen} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IndexPage() {
  return (
    <div>
      <div className="lg:container lg:mx-auto">
        <Nav />
        <div className="py-0 bg-primary px-4">
          <p className="text-2xl text-accent-1 lg:text-4xl font-bold">
                Current Batch
          </p>
          <div className="flex flex-row justify-between lg:px-0 xs:px-0 py-2">
            <div className="text-white text-left">
              <p className="text-sm lg:text-lg">STARTED</p>
              <p className="text-lg font-bold lg:text-xl">
                <span>Oct 21</span>
                <span className="text-sm px-2">(21 days ago)</span>
              </p>
            </div>
            <div className="text-white text-center">
              <p className="text-sm lg:text-lg">RECEIPTS</p>
              <p className="text-lg font-bold lg:text-xl">60</p>
            </div>
            <div className="text-white text-center">
              <p className="text-sm lg:text-lg">REFUND</p>
              <p className="text-lg font-bold lg:text-xl">160.00€</p>
            </div>
          </div>
          
          
          
            <div className="md:w-full lg:w-3/4 mx-auto py-8">
              <button className="bg-accent-2 w-full text-white px-full py-2 rounded-full font-bold border border-accent-2">
                <span className="px-2"><FontAwesomeIcon icon={faReceipt} /></span>  
                <span className="px-2">Add receipt</span>
              </button>
            </div>
            <div className="md:w-full lg:w-3/4 mx-auto py-0">
              <button className="bg-primary w-full text-white px-full py-2 rounded-full font-bold border border-white">
                <span className="px-2"><FontAwesomeIcon icon={faFolderOpen} /></span>  
                <span className="px-2">Manage receipts</span>
              </button>
            </div>
  
        </div>
      </div>
    </div>
  )
}
