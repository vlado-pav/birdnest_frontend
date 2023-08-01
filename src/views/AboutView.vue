<template>
  <article>
    <h1>ABOUT THE PROJECT</h1>
    <p>
      This is the description of the assignment as was found on
      <a href="https://assignments.reaktor.com/birdnest/"
        >https://assignments.reaktor.com/birdnest/</a
      >
      <br>
      I own no rights for the assignment specification, and I post it here solely for the purpose of clarification of goals, if someone came here by an accident.
    </p>

    <br />
    <hr />
    <main>
      <h1>PROJECT BIRDNEST</h1>
      <p>
        A rare and endangered Monadikuikka has been spotted nesting at a local
        lake.
      </p>
      <p>
        Unfortunately some enthusiasts have been a little too curious about this
        elusive bird species, flying their <strong>drones</strong> very close to
        the nest for rare photos and bothering the birds in the process.
      </p>

      <p>
        To preserve the nesting peace, authorities have declared the area within
        <strong>100 meters</strong> of the nest a
        <strong>no drone zone</strong> (NDZ), but suspect some pilots may still
        be violating this rule.
      </p>
      <p>
        The authorities have set up drone monitoring equipment to capture the
        identifying information broadcasted by the drones in the area, and have
        given you access to a national drone pilot registry. They now need your
        help in <strong>tracking violations</strong> and getting in touch with
        the offenders.
      </p>

      <h1>Data</h1>
      <h3>Drone positions</h3>
      <p><code>GET assignments.reaktor.com/birdnest/drones</code></p>
      <p>
        The monitoring equipment endpoint above provides a snapshot of all the
        drones within a <strong>500 by 500 meter square</strong> and is updated
        about <strong>once every 2 seconds</strong>. The equipment is set up
        right next to the nest.
      </p>
      <p>
        This snapshot is in XML format and contains, among other things, the
        position and serial number of each drone in the area.
      </p>
      <ul>
        <li>
          The position of the drones are reported as
          <strong>X and Y coordinates</strong>, both floating point numbers
          <strong>between 0-500000</strong>
        </li>
        <li>
          The no-fly zone is a circle with a <strong>100 meter radius</strong>,
          origin at position 250000,250000
        </li>
      </ul>
      <h3>Pilot information</h3>
      <p>
        <code>GET assignments.reaktor.com/birdnest/pilots/:serialNumber</code>
      </p>
      <p>
        The national drone registry endpoint above will provide you the name,
        contact information and other details for a drone's registered owner in
        JSON format, based on the given serial number. Please note on a rare
        occasion pilot information may not be found, indicated by a 404 status
        code.
      </p>
      <p>
        In order to protect the privacy of well behaved pilots keeping
        appropriate distance,
        <strong
          >you may only query this information for the drones violating the
          NDZ</strong
        >.
      </p>
      <h1>Objective</h1>
      <p>
        <strong
          >Build and deploy a web application which lists all the pilots who
          recently violated the NDZ perimeter.</strong
        >
      </p>
      <p>What it looks like is up to you, but this list should</p>
      <ul>
        <li>
          Persist the pilot information for <strong>10 minutes</strong> since
          their drone was last seen by the equipment
        </li>
        <li>Display the closest confirmed distance to the nest</li>
        <li>Contain the pilot name, email address and phone number</li>
        <li>
          <strong>Immediately</strong> show the information from the last 10
          minutes to anyone opening the application
        </li>
        <li>
          Not require the user to manually refresh the view to see up-to-date
          information
        </li>
      </ul>
      <p>
        Develop the application as if it was always operational. However, for
        the sake of staying within free tiers of some hosting providers, it's OK
        if your application is suspended and loses data after it has not
        received traffic for a while. It'll be given a moment to warm up and
        gather new data before being evaluated.
      </p>
      <p>
        <strong>Tip</strong>: You may find it helpful to also visualize the
        drone positions in some way, but doing so is not a requirement.
      </p>
      <h1>About the data and simulation</h1>
      <ul>
        <li>
          For simplicity, this world is two-dimensional, so don't worry about
          the altitude of the drones.
        </li>
        <li>
          For the sake of making development and testing easier, there should
          always be a few drones in the zone and someone should be violating the
          no-fly perimeter frequently.
        </li>
        <li>
          Each pilot will only fly a single drone and their contact information
          will not change
        </li>
        <li>
          <strong
            >Missing some potential violations at the edge of the perimeter is
            fine</strong
          >, it's enough to report only the violations explicitly visible in the
          snapshots, not violations that may have happened between snapshots.
        </li>
      </ul>
      <h1>Evaluation and priorities</h1>
      <p>The two most important factors we use to evaluate your solution are</p>
      <ul>
        <li>
          The quality of your code, such as readability, structure and
          correctness
        </li>
        <li>
          How well you understood and matched the objectives in this brief
        </li>
      </ul>
      <p>
        Keep in mind how good the UI looks is <em>secondary</em> in the
        evaluation of this assignment and only producing the list is required.
        Focus on solving the objectives first, as bending or omitting some of
        the objectives may trivialize the challenges we are interested to see
        you solve.
      </p>
      <p>
        The choice of technology is up to you and you are free to use any
        libraries you see fit, but the application must be usable with common
        modern web browsers.
      </p>
    </main>
  </article>
</template>

<script>
export default {};
</script>

<style scoped>
  article{
    width: 80%;
    margin: 0 auto;
    text-align: left;
  }
</style>
