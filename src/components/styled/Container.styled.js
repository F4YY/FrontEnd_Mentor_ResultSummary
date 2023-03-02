import styled from "styled-components";

export const Container = styled.div`
    --Light-red: hsl(0, 100%, 67%);
    --Orange-yellow: hsl(39, 100%, 56%);
    --Green-teal: hsl(166, 100%, 37%);
    --Cobalt-blue: hsl(234, 85%, 45%);
    --Light-slate-blue-background : hsl(252, 100%, 67%);
    --Light-royal-blue-background : hsl(241, 81%, 54%);
    --Violet-blue-circle : hsla(256, 72%, 46%, 1);
    --Persian-blue-circle : hsla(241, 72%, 46%, 0);
    --White: hsl(0, 0%, 100%);
    --Pale-blue: hsl(221, 100%, 96%);
    --Light-lavender: hsl(241, 100%, 89%);
    --Dark-gray-blue: hsl(224, 30%, 27%);
    font-size: 18px;
    font-family: 'Hanken Grotesk';
    --reguler:500;
    --semibold:700;
    --bold:800;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    * {
        margin: 0;
        padding: 0;
    }
    h4{
        font-size: 4em;
        font-weight: var(--semibold);
        color: var(--White);
        line-height: 4.6rem;
    }
    h5{
        font-size: 1.7em;
        font-weight: var(--semibold);
        color: var(--White);
        margin:15px 0 15px 0;
    }
    h6{
        font-size: 1.4em;
        font-weight: var(--reguler);
        color:hsla(221, 100%, 96%, 0.8);
        margin: 40px 0 15px;
    }
    h6#summary{
        color:var(--Dark-gray-blue);
        font-weight: var(--semibold);
        margin: 0 0 25px 0;
    }
    p#hundred{
        font-size: 1.2rem;
        font-weight: var(--reguler);
        color:hsla(221, 100%, 96%, 0.5);
    }
    p#per-hundred{
        font-size: 1.2rem;
        font-weight: var(--semibold);
        color:hsla(0, 0%, 50%, 0.8);
    }
    p#desc{
        font-size: 1.1rem;
        font-weight: var(--reguler);
        color:hsla(221, 100%, 96%, 0.8);
        margin:0 55px;
        @media screen and (max-width: 960px) {
            margin: 0 40px 40px;
        }
    }
    p#score{
        font-size: 1.2rem;
        font-weight: var(--semibold);
        color:var(--Dark-gray-blue);
    }
`