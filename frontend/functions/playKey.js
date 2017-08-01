const playKey = (note) => {
    let audio = new Audio
    audio.src = '/public/Notes/' + note + '.mp3';
    audio.play();
}
export default playKey