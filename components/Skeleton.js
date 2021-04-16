const Skeleton = () => {
  return (
    <div className='skeleton'>
      <div className='skel-banner'></div>
      <div className='skel-header'></div>
      <div className='skel-content'></div>
      <div className='skel-content'></div>
      <div className='skel-content'></div>

      <style jsx>{`
                .skeleton {
                    width: width: min(100%, 1400px);
                    margin: 0 auto;
                    padding: 0 20px 80px;
                    background: #fff;
                }
                .skeleton > div {
                    background: #bbb;
                    border-radius: 4px;
                }
                .skel-banner {
                    padding: 12% 0;
                }
                .skel-header {
                    max-width: 500px;
                    margin: 20px 0;
                    padding: 15px 0;
                }
                .skel-content {
                    max-width: 1000px;
                    margin: 20px 0;
                    padding: 8px 0;
                }
            `}</style>
    </div>
  )
}

export default Skeleton
