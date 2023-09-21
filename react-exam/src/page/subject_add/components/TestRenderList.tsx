import TestItem from "./TestItem";

function TestRenderList(props: any) {
    const list = props.list

    return (
        <div>
            {
                list.map((element: any) => {
                    return <TestItem key={element._id} title={element.title} />
                })
            }
        </div>
    )
}

export default TestRenderList