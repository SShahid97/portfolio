function Logo({ appTitle }) {
  return (
    <div className='pl-3 md:pl-0 text-2xl fond-bold'>
    <div className='flex justify-start items-center gap-2 text-white'>
        <img 
            src='https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg'
            alt='profile'
            width={40}
            height={40}
            style={{borderRadius: 1000}}    
        />
        {appTitle}
    </div>
</div>
  );
}

export default Logo;
