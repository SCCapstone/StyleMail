import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import io.github.bonigarcia.wdm.WebDriverManager;

public class CustomTemplate {

	public static void main(String[] args) 
	{
		
		
		ChromeOptions chromeOptions = new ChromeOptions();
		WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver(chromeOptions);		 
		driver.get("https://run.stylemail.app/login");					
		
		driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);			
		driver.findElement(By.xpath("//*[@id=\"login\"]")).sendKeys("khegs99@gmail.com");
		driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys("dR2NVtdu3sPO");						
		
		
		driver.findElement(By.xpath("//*[@id=\"bottom\"]")).click();//click login
		
		
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div[2]/div/div[3]/div[2]/button ")).click();//click custom template 
				
		
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div[1]/div/div[1]/div/div/button")).click();
		//add template click 
			

		driver.findElement(By.xpath("//*[@id=\"title\"]")).sendKeys("Holiday Special ");// fill out title 
		
		driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);	//wait for browser to catch up 
	
		
		driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/form/div[3]/button[2]")).click();//click custom template 
		//click save 
								
		

	}

}
