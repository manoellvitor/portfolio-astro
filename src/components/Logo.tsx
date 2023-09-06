import Typewriter from "typewriter-effect";

function Logo() {
  return (
    <h1 className="text-4xl font-bold">
        <Typewriter
          options={{
            strings: ["Manoel Lopes"],
            autoStart: true,
            loop: false,
            cursor: "_",
            cursorClassName: "text-white"
          }}
        />
    </h1>
  )
}

export default Logo