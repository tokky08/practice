const PublishButton = (props) => {
    return (
        <button onClick={() => props.onClick(props.isPublished)}>
            公開状態：{props.isPublished.toString()}
        </button>
    )
}
export default PublishButton;