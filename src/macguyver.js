//
// Thanks go out to: https://www.motivateamazebegreat.com/2017/03/44-macgyver-inspirational-quotes-knowledge-resourcefulness.html
//
import React, {useState, useEffect} from 'react'

function MacGuyver({speed, startIdx}) {
    
    const quotes = [
        "A paperclip can be a wonderous thing. More times than I can remember, one of these has gotten me out of a tight spot.",
        "I say we trust our instincts, go with our gut. You can't program that. That's our edge.",
        "The great thing about a map: it gets you in and out of places in a lot different ways.",
        "A man once said, 'When you make a friend, you take on a responsibility'.",
        "The best way to beat a problem is to make it work for you.",
        "The best way to beat a problem is to make it work for you.",
        "Old Minnesota wisdom: if you don't wanna be touched, look downright untouchable.",
        "You can do anything you wanna do if you put your mind to it.",
        "Mostly I like to see how the world works. Meet people. Learn how they're different - and the same.",
        "There always seems to be a way to fix things.",
        "If you've got something to say, you should say it. Otherwise, it's just gonna tear you up inside.",
        "That's the way the world gets better... one person at a time.",
        "I've found from past experiences that the tighter you plan, the more likely you are to run into something unpredictable.",
        "First impressions are very important. And with this group, I knew it'd be critical. So I decided to make a grand entrance ... through their noses.",
        "Some people are scared of anybody who runs free.",
        "We've got a pretty good planet here, as planets go. The trouble is, we're lettin' it go down the drain in too many places.",
        "Well, when it comes down to me against a situation, I don't like the situation to win.",
        "Some people say that there are no more frontiers left for us to conquer. But then again, some people still go out into the wilderness in search of their dream.",
        "There's a fine line in nature that divides the hunter from the hunted.",
        "It's not so bad to be special... you just have to learn to feel good about it.",
        "You don't go to people with your problems. You come to your friends.",
        "I learned something a long time ago: never laugh at what you don't know.",
        "How can you feel confined when you're in touch with the universe?",
        "The past is a strange country. You go back; it doesn't recognize you.",    
        "I guess the way you look at the world depends on where you are. From up here it looked like a pretty nice place.",
        "A good relationship is a lot like a car. If you want it to work smoothly, you gotta put a lot of work into it, and have the right tools.",
        "What is it with you people? Why are you so afraid of going after the truth?",
        "Everybody makes mistakes once in a while. The trick is learning to live with it.",
        "Desperation tends to make one sort of...flexible.",
        "If you don't have the right equipment for the job, you just have to make it yourself.",
        "My old high school physics and chemistry classes come in real handy sometimes. Not to mention the fact that when you're in a squeeze, necessity always seems to come through as the true mother of invention.",
        "Discipline's only a crime when it's enforced by somebody with the sensitivity and judgment of a rock.",
        "I think you're like a lot of people. You can't see the trees because you're too busy cutting' down the forest.",
        "I think you're like a lot of people. You can't see the trees because you're too busy cutting' down the forest.",
        "When I was a kid, my grandfather used to say to me that ... a fellow's life wasn't worth mentioning if he hadn't shared it with some folks along the way.",
        "Another day, a whole 'nother set of fresh possibilities ... I'm a sucker for mornings.",
        "If this is really what you want for yourself, great; that's no crime. But if it isn't, if you wake up thirty years from now, and all you are is thirty years older...that is a crime.",
        "Any problem can be solved with a little ingenuity.",
        "Well, sometimes things are hidden under the surface...You just gotta know how to bring 'em out.",
        "Only a fool is sure of anything, a wise man keeps on guessing.",
        "It's kinda interesting how you can put one thing with another and cook up the right formula for staying' out of trouble.",
        "'Every action has a reaction'...you've got to believe that.",
        "It's really nice to wake up in your own neighborhood, and not have to worry about going to work, no plans. Just being able to ease into the day.",
        "The bag's not for what I take, Colson - it's for what I find along the way.",
        "We're all gonna die. The trick is not to rush it.",
        "If this works, it'll keep us from getting caught. If it doesn't, it'll keep us from getting old,"
    ]
    
    const [currentQuote, setCurrentQuote] = useState(quotes[startIdx])
    const [intervalId, setIntervalId] = useState(null)

  
    const rndQuote = () => {
        return quotes[Math.floor(Math.random() * quotes.length)]
    }

    const cycle = () => {        
        setIntervalId(setInterval(function() {
            setCurrentQuote(rndQuote())
        }, speed))
    }

    const stopCycle = () => {
        clearInterval(intervalId)        
    }

    useEffect(() => {
        cycle()
        return function cleanup() {
            stopCycle()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <p id="macgquote" className="quote">{currentQuote}</p>
    )
}

export default MacGuyver