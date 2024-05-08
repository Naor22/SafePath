export const drawRect = (prediction, ctx) => {
    const [x, y, width, height] = prediction['bbox'];
    const text = prediction['class'];

    const color = 'red';
    ctx.strokeStyle = color;
    ctx.font = '18px Arial';
    ctx.fillStyle = color;

    ctx.beginPath();
    ctx.fillText(
        text,
        x,
        y
    );
    ctx.rect(x, y, width, height);
    ctx.stroke();

}
