//oop - abstraction


//idea

// implementation pore korbo


/**
 * 
 * 1. interface
 * 2. absreacr class
 */

// idea
// interface MediaPlayer{
//     paly(): void;
//     pause(): void;
//     stop(): void;
// }

// // implementation
// class MusicPlayer implements MediaPlayer {
//     paly(){
//         console.log('Playiing music.....')
//     }
//     pause() {
//         console.log("Music paused.....");
//     }
//     stop() {
//         console.log("Music stopped.....");
//     }
// }

// const MezbaPlayer = new MusicPlayer();

// MezbaPlayer.paly();

// idea
abstract class MediaPlayer {
   abstract play():void;
    abstract pause(): void;
    abstract stop(): void;
}

// implementation
class MezbaPlayer extends MediaPlayer {
    play(): void {
        console.log(`Playing music...`);
    }
    pause(): void {
        console.log(`music is paused ...`);
    }
    stop(): void {
        console.log(`music is stoped ...`);
    }
}

const mzbaPlayer1 = new MezbaPlayer();

mzbaPlayer1.play();