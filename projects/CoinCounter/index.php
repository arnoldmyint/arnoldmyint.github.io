<?php include("include/header.php"); ?>
 <h2>Cash Calculator</h2>
                        <span class="cent">&cent;&cent;&cent;&cent;</span>
                        <span class="and">&amp;</span>&nbsp;
                        <span class="dollar">$$$$</span>&nbsp;
                        <br/>
                    </header>
                <p>Please enter your coin count and denominations:</p><br />
</div>
 </div>   <br />  <br />  </div>  <br /> 


<?php
	if (isset($_GET["error"])) {
		echo "<p style='color:red; text-align: center;'>" . $_GET["error"] . "</p>";
	}
?>
<form action="coincount.php" method="post" role="form" class="form-horizontal" OnSubmit="check();">
    <div class="form-group">
        <label class="col-lg-2 col-lg-offset-2 col-sm-12">Pennies (1 &cent;):</label>
        <div class="col-lg-6">
            <input type="text" class="form-control" name="pennies" placeholder="Enter pennies" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-lg-2 col-lg-offset-2 col-sm-12">Nickels (5 &cent;):</label>
        <div class="col-lg-6">
            <input type="text" name="nickels" class="form-control" placeholder="Enter nickels" size="6" />
            
        </div>
        
    </div>
    <div class="form-group">
        <label class="col-lg-2 col-lg-offset-2 col-sm-12">Dimes (10 &cent;):</label>
        <div class="col-lg-6">
            <input type="text" name="dimes" class="form-control" placeholder="Enter dimes" size="6" />
        </div>
       
    </div>
    <div class="form-group">
        <label class="col-lg-2 col-lg-offset-2 col-sm-12">Quarters (25 &cent;):</label>
        <div class="col-lg-6">
            <input type="text" name="quarters" class="form-control" placeholder="Enter quarters" size="6" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-lg-2 col-lg-offset-2 col-sm-12">1 Dollar Coins:</label>
        <div class="col-lg-6">
            <input type="text" name="dollar" class="form-control" placeholder="Enter one dollar coins" size="6" />
        </div>
        
    </div>
    <div class="form-group">
        <label class="col-lg-2 col-lg-offset-2 col-sm-12">2 Dollar Coins:</label>
        <div class="col-lg-6">
            <input type="text" name="twodollar" class="form-control" placeholder="Enter two dollar coins" size="6" />
        </div> 
    </div>
    <div class="form-group">
        <div class="col-lg-12 col-lg-offset-4 col-sm-12">
            <input type="submit" class="btn btn-primary" name="submit" value="Calculate Coins" onclick="check();"/>
            <input type="reset" class="btn btn-primary" name="reset" value="Clear form" />
        </div>
</form>
<?php
   include("include/footer.php"); 
?>
