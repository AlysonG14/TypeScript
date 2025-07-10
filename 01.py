from selenium import webdriverDDD
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# Caminho para o seu chromedriver
driver = webdriver.Chrome(executable_path='CAMINHO_PARA_SEU_CHROMEDRIVER')

# Acessa a página de login
driver.get("http://localhost:3000/login")

# Aguarda a página carregar
time.sleep(2)

# Preenche o campo de e-mail
email_input = driver.find_element(By.NAME, "email")
email_input.send_keys("usuario@exemplo.com")

# Preenche o campo de senha
senha_input = driver.find_element(By.NAME, "senha")
senha_input.send_keys("senha123")

# Envia o formulário
senha_input.send_keys(Keys.RETURN)

# Aguarda redirecionamento
time.sleep(2)

# Verifica se foi redirecionado para o dashboard
assert "/dashboard" in driver.current_url

# Verifica se aparece a mensagem de boas-vindas
mensagem = driver.find_element(By.TAG_NAME, "body").text
assert "Bem-vindo, usuário" in mensagem

# Fecha o navegador
driver.quit()
