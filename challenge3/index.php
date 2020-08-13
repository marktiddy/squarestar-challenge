<?php echo 'hello';
//Form Code
$name;
if (isset($_GET['name'])) {
  $name = htmlspecialchars(($_GET['name']));
}

//Let's get fruity
$fruits = array(
  'lemon',
  'orange',
  'banana',
  'apple'
);

//Squarestar Jobs
class Person
{
  private $name;
  private $jobTitle;

  public function __construct($name, $jobTitle)
  {
    $this->name = htmlspecialchars($name);
    $this->jobTitle = htmlspecialchars($jobTitle);
  }

  public function getName()
  {
    return $this->name;
  }

  public function getJobTitle()
  {
    return $this->jobTitle;
  }
}

$chris = new Person('Chris', 'Director');
$aaron = new Person('Aaron', 'Web Developer');
$alex = new Person('Alex', 'Director');
//Fingers crossed
//$mark = new Person('Mark','Web Developer');
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="styles.css">
  <title>Challenge 3</title>
</head>

<body>
  <div class="container">
    <div class="main-area">
      <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="get">
        <label for="name">What is your name?</label>
        <input type="text" name="name" id="name" required>
        <input type="submit" value="Submit" class="btn btn-form">
      </form>
      <div class="section">
        <p>
          <?php if (isset($name)) : ?>
            Hello, my name is <?php echo ucfirst(htmlspecialchars(($name))); ?>
          <?php endif; ?>
        </p>
      </div>
      <div class="divider"></div>
      <div class="section">
        <p><?php
            sort($fruits);

            foreach ($fruits as $fruit) {
              echo ucfirst($fruit) . '<br>';
            }

            ?></p>
      </div>
      <div class="divider">

      </div>
      <div class="section">
        <h2>The Team</h2>
        <p> <?php echo $chris->getName() . ' - ' . $chris->getJobTitle() ?></p>
        <p> <?php echo $aaron->getName() . ' - ' . $aaron->getJobTitle() ?></p>
        <p> <?php echo $alex->getName() . ' - ' . $alex->getJobTitle() ?></p>

      </div>
    </div>
  </div>

</body>

</html>