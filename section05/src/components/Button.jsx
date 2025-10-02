const Button = ( { children, text, color = "black"} ) => {
    console.log(props);

    //이벤트 객체
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    };

    return (
        <Button
            onClick={ onClickButton }
            // onMouseEnter= { onClickButton }
        style={{ color: color }}>
           {text} - {color.toUpperCase()}
           {children}
        </Button>
    )
};

export default Button;