import Header from "../components/header";

export default function About() {
  return (
    <div>
      <Header />

      <div className="max-w-prose mx-auto">
        <p>Hey! This is Siddhant, your friendly neighborhood creative technologist :)


          I am in an exploratory phase in my career, looking to leverage the various skills acquired so far — across UX design, technology and art — onto new innovative frontiers.
        </p>

        <h3>My background</h3>
        <p>Design</p>
        <p>Technology</p>
        <p>Art</p>

        <h3>I love working on...</h3>
        <ul>
          <li>
            <h4>Prototyping & Proof of Concepts</h4>
            <p>Getting started from zero, and going from ambiguity to clarity.</p>
          </li>
          <li>
            <h4>Innovative Explorations</h4>
            <p>Always love to challenge the status quo.</p>
          </li>
          <li>
            <h4>Emerging Tech</h4>
            <p>I enjoy researching, keeping up and working with the latest in tech.</p>
          </li>
          <li>
            <h4>Social Impact</h4>
            <p>Real problems, real solutions.</p>
          </li>
          <li>
            <h4>Art with Tech</h4>
            <p>For the pure joy of it.

            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
