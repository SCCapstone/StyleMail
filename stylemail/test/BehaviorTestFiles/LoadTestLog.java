import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import io.github.bonigarcia.wdm.WebDriverManager;

public class LoadTestLog {

	public static void main(String[] args) {
		
		ChromeOptions chromeOptions = new ChromeOptions();
		WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver(chromeOptions);		 
		driver.get("https://run.stylemail.app/login");					
		
		driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);			
		driver.findElement(By.xpath("//*[@id=\"login\"]")).sendKeys("khegs99@gmail.com");
		driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys("dR2NVtdu3sPO");					
		driver.findElement(By.xpath("//*[@id=\"bottom\"]")).click();//click login		
		driver.findElement(By.xpath("//*[@id=\"collasible-nav-dropdown\"]")).click();//click dropdown menu 		
		
		driver.findElement(By.xpath("//*[@id=\"responsive-navbar-nav\"]/div[2]/div/div/a[2]")).click();//click sendLog
	
	}

}
