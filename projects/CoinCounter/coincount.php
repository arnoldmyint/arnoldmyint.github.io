<?php
    extract($_POST);
				$error = "";
                if(empty($pennies)){
					$pennies = 0;
				}
				 if(is_numeric($pennies)){
					$pennies = trim($pennies);
				}
				else{
					$error .= "You must enter a number for pennies.<br/>";
				}				
				if(empty($nickels)){
					$nickels = 0;
				}
				 if(is_numeric($nickels)){
					$nickels = trim($nickels);
				}
				else{
					$error .= "You must enter a number for nickels.<br/>";
				}
				if(empty($dimes)){
					$dimes = 0;
				}
				 if(is_numeric($dimes)){
					$dimes = trim($dimes);
				}
				else{
					$error .= "You must enter a number for dimes.<br/>";
				}
				if(empty($quarters)){
					$quarters = 0;
				}
				 if(is_numeric($quarters)){
					$quarters = trim($quarters);
				}
				else{
					$error .= "You must enter a number for quarters.<br/>";
				}
				if(empty($dollar)){
					$dollar = 0;
				}
				 if(is_numeric($dollar)){
					$dollar = trim($dollar);
				}
				else{
					$error .= "You must enter a number for loonies.<br/>";
				}
				if(empty($twodollar)){
					$twodollar = 0;
				}
				 if(is_numeric($twodollar)){
					$twodollar = trim($twodollar);
				}else{
					$error .= "You must enter a number for toonies.<br/>";
				}	
    
    if ($error != "")
				{
					header("Location: index.php?error=" .$error); die();
				}
                $total_cents = $pennies*1+$nickels*5+$dimes*10+$quarters*25+$dollar*100+$twodollar*200;
  ?>
  
  <?php include("include/header.php"); ?>
  
                    <h1>Coin Count</h1>
                    <br />
                </header>
                
                <h3>The following coins were counted and valued</h3>
<br /> <br /> 
</div>     
<br /> 
<br /> <div class="row">
                <div class="col-lg-3 col-sm-6 col-xs-6">Pennies:</div>
                <div class="col-lg-3 col-sm-6 col-xs-6"><?php echo $pennies; ?></div>
                <div class="col-lg-3 col-sm-6 col-xs-6">Nickels:</div>
                <div class="col-lg-3 col-sm-6 col-xs-6"><?php echo $nickels; ?></div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-sm-6 col-xs-6">Dimes:</div>
                <div class="col-lg-3 col-sm-6 col-xs-6"><?php echo $dimes; ?></div>
                <div class="col-lg-3 col-sm-6 col-xs-6">Quarters:</div>
                <div class="col-lg-3 col-sm-6 col-xs-6"><?php echo $quarters; ?></div>
            </div>
            
            <div class="row">
                <div class="col-lg-3 col-sm-6 col-xs-6">Dollar Coin:</div>
                <div class="col-lg-3 col-sm-6 col-xs-6"><?php echo $dollar; ?></div>
                <div class="col-lg-3 col-sm-6 col-xs-6">2 Dollar Coin:</div>
                <div class="col-lg-3 col-sm-6 col-xs-6"><?php echo $twodollar; ?></div>
            </div>
            <h3>You therefore have:</h3>
            <div class="row">
                <div class="col-lg-3 col-sm-6 col-xs-6">Total Cents:</div>
                <div class="col-lg-3 col-sm-6 col-xs-6"><?php echo "&cent".$total_cents; ?></div>
                <div class="col-lg-3 col-sm-6 col-xs-6">Total Dollars:</div>
                <div class="col-lg-3 col-sm-6 col-xs-6"><?php echo "$".$total_cents/100; ?></div>
            </div>
              

            <hr />
            <button type="button" class="btn btn-success" onclick="location.href='index.php'">Back to home page</button>
       
<?php include("include/footer.php"); ?>