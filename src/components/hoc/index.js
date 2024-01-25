import { withLoading } from "./WithLoading";

const MyLoadingComponent=({isLoading})=>{
    return <div>
        {isLoading?<p>Loading...</p>:<p>Hello World!</p>}
    </div>
}

export default withLoading(MyLoadingComponent);