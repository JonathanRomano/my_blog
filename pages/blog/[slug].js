import { useRouter } from "next/router";

function post_view() {
    
    const router = useRouter()
    const slug = router.query.slug

    return (
        <>
            <div>slug: {slug}</div>
            <div>ta quase!</div>
        </>
    )
}
export default post_view