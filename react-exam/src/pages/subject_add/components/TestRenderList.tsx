import TestItem from "./TestItem"

function TestRenderList(props: any) {
    const list = props.list

    return (
        <div>
            {
                list.map((element: any) => {
                    // let i = 0
                    // while(i < 10000000) {
                    //     i++
                    // }
                    return <TestItem key={element._id} title={element.title} />
                })
            }
        </div>
    )
}

export default TestRenderList