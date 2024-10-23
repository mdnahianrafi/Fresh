import { useState } from 'react'
import './App.css'
import Flex from './components/Flex'
import Container from './components/Container'
import Image from './components/Image'
import Logo from '../src/assets/Logo.png'
import Menu from './components/menu'
import Button from './components/Button'
import Heading from './components/Heading'
import BannerModel from '../src/assets/banner model.png'
import CollectionModel from '../src/assets/collection model.png'
import Jeans from '../src/assets/jeans.png'
import Sneakers from '../src/assets/sneakers.png'
import FashionModel from '../src/assets/Fashion Model.png'
import DotPattern from '../src/assets/Dot pattern.png'
import Sweater from '../src/assets/Sweater.png'
import Pants from '../src/assets/Pants.png'
import { FaStar } from "react-icons/fa";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Header Part started */}
<div className="py-4 bg-headerBg">
<Container>
<Flex>
      <div className="w-[10%] py-4">
            <Image imgSrc={Logo}/>
      </div>
      <div className="w-[60%] py-4">
<Flex className={"justify-center gap-x-12"}>
<Menu menuName={'Men'} className={"font-pop text-2xl font-semibold"}/>
        <Menu menuName={'Women'} className={"font-pop text-2xl font-semibold"} />
        <Menu menuName={'Kids'} className={"font-pop text-2xl font-semibold"} />
        <Menu menuName={'Collection'} className={"font-pop text-2xl font-semibold"} />
        <Menu menuName={'Trends'}  className={"font-pop text-2xl font-semibold"}/>
</Flex>
      </div>
      <div className="w-[30%]">
       <Button btnName={'Login'} className={'py-[15px] px-[30px]  border border-btnHoverBorder drop-shadow-lg rounded-lg hover:bg-btnHoverColor hover:rounded-xl hover:transition-all ease-in-out duration-250 delay-150 '}/>
       <Button btnName={'Sign up'} className={'py-[15px] px-[30px] border border-btnHoverBorder drop-shadow-lg rounded-lg hover:bg-btnHoverColor hover:rounded-xl hover:transition-all ease-in-out duration-250 delay-150 '} />
      </div>
    </Flex>
</Container>
</div>
{/* Header Part ended */}

{/* Banner Part Started  */}
<div className='py-28 bg-headerBg'>
<Container>
  <Flex>
  
  <div className='w-1/2'>
  <Heading as={'h2'}  className={'text-[64px] font-semibold font-pop pr-40'} text={'Find The Best Fashion Style For You'}/>
  
  <Heading as={'h2'}  className={'text-[22px]  font-pop leading-9 pr-40 py-5'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. '}/>
  <Button  btnName={'Shop Now'} className={'bg-black py-5 px-14 text-white uppercase rounded-xl'}></Button>
  </div>
  
  <div className='w-1/2'>
 <Image imgSrc={BannerModel}  />
  </div>

  </Flex>
</Container>
</div>
{/* Banner Part Ended*/}

{/* Collection Part Started  */}
<div className='py-40 '>
<Heading as={'h2'}  className={'text-[64px] text-center font-bold font-frank '} text={'New Collection'}/>
<div className='py-28'>
  <Container>
    <Flex className={'justify-between'}>
      <div className='w-[350px] rounded-lg relative'>
        <Image imgSrc={CollectionModel} />
        <Button btnName={"Sweater"} className={'bg-white rounded-xl py-2 px-20 absolute left-1/2 bottom-7 -translate-x-1/2'}/>
      </div>
      <div className='w-[350px] rounded-lg relative'>
        <Image imgSrc={Jeans} />
        <Button btnName={"Sweater"} className={'bg-white rounded-xl py-2 px-20 absolute left-1/2 bottom-7 -translate-x-1/2'}/>
      </div>
      <div className='w-[350px] rounded-lg relative'>
        <Image imgSrc={Sneakers} />
        <Button btnName={"Sweater"} className={'bg-white rounded-xl py-2 px-20 absolute left-1/2 bottom-20 -translate-x-1/2'}/>
      </div>
    </Flex>
  </Container>
</div>
</div>
{/* Collection Part Ended  */}

{/* Fashion Part Started  */}
<div className='relative pb-28'>
  <Container>
    <Flex className={'justify-center'}>
      <div className='w-1/2 '>
      <Image imgSrc={FashionModel} className={''}/>
      <Image imgSrc={DotPattern} className={'absolute z-[-1] top-[-100px] left-[45%]'}/>
      </div>
      <div className='w-1/2 '>
      <Heading as={'h1'} text={" Best Fashion Since 2010"} className={' pl-24 pr-20 text-[64px] font-frank font-bold'} />
      <Heading as={'h3'} text={" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "} className={' pl-24 pr-32 py-16 text-2xl font-pop font-semibold'} />
      </div>
    </Flex>
    
    <div className='w-[793px] bg-counterBg rounded-xl p-14 absolute -bottom-[9%] left-[43%] z-[-1]'>
      <Flex className={'justify-between gap-x-5'}>
        <div className='w-1/3 border-r-2 border-black '>
        <Heading as={'h1'} text={" 2010"} className={' text-[64px] font-pod font-bold'} />
        <Heading as={'h4'} text={" Founded"} className={' text-[28px] font-pod font-medium'} />
        </div>
        <div className='w-1/3 border-r-2 border-black'>
        <Heading as={'h1'} text={" 5000+"} className={' text-[64px] font-pod font-bold'} />
        <Heading as={'h4'} text={" Product Sold"} className={' text-[28px] font-pod font-medium'} />
        </div>
        <div className='w-1/3 '>
        <Heading as={'h1'} text={" 4500+"} className={' text-[64px] font-pod font-bold'} />
        <Heading as={'h4'} text={" Best Reviews"} className={' text-[28px] font-pod font-medium'} />
        </div>
      
      </Flex>
    </div>
  </Container>
</div>
{/* Fashion Part Ended  */}

{/* Seller Part Started  */}
<div className='pb-48 mt-52 bg-sellerBg pt-14'>
  <Container>
    <Flex>
<div className='w-1/2'>
<Heading as={'h1'} text={"  Best Seller Product"} className={' text-[64px] font-frank font-bold pr-60 text-white'} />
<Heading as={'p'} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus."} className={' text-[24px] font-frank font-bold pr-72 py-12 text-white'} />
<Button  btnName={'Learn More'} className={'bg-black py-5 px-14 text-white uppercase rounded-xl'}></Button>
</div>

<div className='w-1/2'>
<Flex className={'justify-between gap-x-8'}>
<Flex>
  <div className='w-[366px]  rounded-xl'>
    <Image imgSrc={Sweater} className={''}/>
    <div className='p-[17px] bg-white'>
<Flex className={'gap-x-1'}>
<FaStar className= 'text-starColor text-[20px]' />
       <FaStar className= 'text-starColor text-[20px] ' />
       <FaStar className= 'text-starColor text-[20px] ' />
       <FaStar className= 'text-starColor text-[20px]' />
       <FaStar className= 'text-starColor text-[20px] ' />
</Flex>
<Heading as={'p'} text={"Sweater Shirt"} className={' py-4 text-[22px] font-frank font-semibold '} />

<Flex>
<Heading as={'p'} text={"$45.99"} className={'pr-4  text-[22px] font-frank font-semibold text-priceColor'} />
<Heading as={'p'} text={"$35.99"} className={' text-[22px] font-frank font-semibold '} />
</Flex>

    </div>
  </div>
</Flex>
<Flex>
  <div className='w-[366px]  rounded-xl'>
    <Image imgSrc={Pants} className={''}/>
    <div className='p-[17px] bg-white'>
<Flex className={'gap-x-1'}>
<FaStar className= 'text-starColor text-[20px]' />
       <FaStar className= 'text-starColor text-[20px] ' />
       <FaStar className= 'text-starColor text-[20px] ' />
       <FaStar className= 'text-starColor text-[20px]' />
       <FaStar className= 'text-starColor text-[20px] ' />
</Flex>
<Heading as={'p'} text={"Pants"} className={' py-4 text-[22px] font-frank font-semibold '} />

<Flex>
<Heading as={'p'} text={"$55"} className={'pr-4  text-[22px] font-frank font-semibold text-priceColor'} />
<Heading as={'p'} text={"$44.99"} className={' text-[22px] font-frank font-semibold '} />
</Flex>

    </div>
  </div>
</Flex>
</Flex>

</div>
    </Flex>
  </Container>
</div>
{/* Fashion Part Ended  */}


    </>
  )
}

export default App
