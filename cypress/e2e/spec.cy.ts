describe('user authentication', () => {
  const email = `testmail${Math.random()}@mail.com`;

  function changeTariff(number: string) {
    cy.get(`:nth-child(${number}) > .card-body > .btn`).click();
    cy.get('#Название').clear().type(`Тариф ${number}`);
    cy.get('#Описание_тарифа').clear().type(`Описание ${number}`);
    cy.get('#Цена').clear().type(`${number}${number}${number}${number}`);
    cy.contains('Сохранить тариф').click();
  }

  function checkTariff(number: string) {
    cy.contains(`Тариф ${number}`);
    cy.contains(`Описание ${number}`);
    cy.contains(`${number} ${number}${number}${number} ₽`);
  }

  function checkProfileValidity() {
    checkTariff('1');
    checkTariff('2');
    checkTariff('3');
    cy.contains(email);
    cy.contains('Username');
    cy.contains('Usersurname');
    cy.contains('2020');
    cy.contains('middle');
    cy.contains('Русский');
    cy.contains('English');
    cy.contains('Github');
    cy.contains('Получением навыков');
    cy.contains('Описание ментора');
  }

  it('should only allow login with correct credentials', () => {
    cy.visit('http://localhost:3000/test-drive/mementor/', { timeout: 9000 });
    cy.contains('Войти').click();
    cy.contains('Поле заполнено не верно');
    cy.contains('Длина пароля должна быть минимум 6 символов');
    cy.get('#Email').click().type('testmail@mail.com');
    cy.get('#Пароль').click().type('password');
    cy.contains('Поле заполнено не верно').should('not.exist');
    cy.contains('Длина пароля должна быть минимум 6 символов').should(
      'not.exist'
    );
    cy.contains('Создать').click();
  });

  it('should only allow register with correct credentials', () => {
    cy.contains('Создать').click();
    cy.contains('Поле заполнено не верно');
    cy.contains('Длина пароля должна быть минимум 6 символов');
    cy.get('#Email').click().type(email);
    cy.get('#Пароль').click().type('password');
    cy.contains('Создать').click();
  });

  it('should not display user while it is not valid', () => {
    cy.contains('Отменить').click();
    cy.contains('Профиль недоступен публично');
    cy.contains('Изменить').click();
  });

  it('should not allow to save user with wrong data', () => {
    cy.contains('Сохранить').click();
    cy.contains('Поле заполнено не верно');
  });

  it('should allow to save user with correct data', () => {
    cy.get('#Имя').click().type('Username');
    cy.get('#Фамилия').click().type('Usersurname');
    cy.get('#Опыт_работы_с').select('2020');
    cy.get('#Грейд').select('Middle');
    cy.get('#На_каких_языках_вы_разговариваете')
      .click()
      .type('Русский English');
    cy.get('#Каким_языкам_программирования_вы_обучаете')
      .click()
      .type('JavaScript Python');
    cy.get('#Какие_технологии_вы_используете_в_работе')
      .click()
      .type('Git Github');
    cy.get('#Готов_помочь_с').click().type('Получением навыков');
    cy.get('#Описание').click().type('Описание ментора');

    changeTariff('1');
    changeTariff('2');
    changeTariff('3');

    cy.contains('Сохранить').click();
  });

  it('should display user data correctly', () => {
    cy.contains('Изменить информацию в профиле');
    checkProfileValidity();
    cy.reload();
  });

  it('should login previous account', () => {
    cy.get('#Email').click().type(email);
    cy.get('#Пароль').click().type('password');
    cy.contains('Поле заполнено не верно').should('not.exist');
    cy.contains('Длина пароля должна быть минимум 6 символов').should(
      'not.exist'
    );
    cy.contains('Войти').click();
    cy.contains('Изменить информацию в профиле');
    checkProfileValidity();
  });
});
