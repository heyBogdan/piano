const playKey = (note) => {
    let audio = new Audio
    audio.src = 'notes/' + note + '.mp3';
    audio.play();
}
export default playKey