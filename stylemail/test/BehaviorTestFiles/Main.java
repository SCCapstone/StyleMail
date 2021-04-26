import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Main {

	public static void main(String[] args) throws InterruptedException {	
				
		ChromeOptions chromeOptions = new ChromeOptions();
		WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver(chromeOptions);		 
		driver.get("https://run.stylemail.app/login");					
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);			
		driver.findElement(By.xpath("//*[@id=\"login\"]")).sendKeys("khegs99@gmail.com");
		driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys("dR2NVtdu3sPO");						
		driver.findElement(By.xpath("//*[@id=\"bottom\"]")).click();	
							
		
	}
}
