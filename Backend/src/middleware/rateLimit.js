import ratelimit from "../config/upstash.js"


const rateLimit = async (req , res , next)=>{

    try {
        
        const {success} = await ratelimit.limit("my-limit-key")

        if(!success){
            res.status(429).json({message:"Too many request , please try again"})
        }
        next()

    } catch (error) {
        console.log("Error on Redis middleware",error.message);
       next(error)
        
    }
}

export default rateLimit