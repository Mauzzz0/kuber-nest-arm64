## Description

The boilerplate for next projects and commit-story of how Ruslan is tried to launch k8s cluster on local machine with Apple M1 Pro (arm64) with broken ingress-nginx-controller and one day minikube just started working fine on default settings. :((  
Of course if you are not forgot to add `127.0.0.1 domain.com` to `/etc/hosts`

## Команды
`npm ci` - установка зависимостей из package-lock.json  
`npm run start` - старт сервиса на 3000 порту  
`npm run coverage` - запуск деплоя кластера на локальной машине  

## Roadmap
- [X] Базовый деплой кластера
    - [X] Выбор контроллера
      - Из [ingress-nginx](https://github.com/nginxinc/kubernetes-ingress), [ingress-kubernetes](https://github.com/kubernetes/ingress-nginx), [Kong-ingress](), [Traefik](https://github.com/traefik/traefik), [Haproxy](https://github.com/jcmoraisjr/haproxy-ingress) заработал полностью лишь первый (ingress-nginx) 
    - [X] Корректная настройка машины
      - `minikube start --driver=docker` (podman/hyperkit не подходят)
      - `echo "127.0.0.1 domain.com" | sudo tee -a /etc/hosts` (в отличие от "обычных" (не ARM) примеров, нужно писать 127.0.0.1 вместо `minikube ip`)
      - `minikube tunnel` (external ip в lens всегда будет пустым)
    - [X] Деплой минимального nest сервера с доступностью/ответами и без ошибок
      - Не забыть указать `export DOCKER_DEFAULT_PLATFORM=linux/amd64`
- [ ] PostgreSQL
    - [ ] Сам чарт k8s
    - [ ] Поддержка в NestJS
    - [ ] PgAdmin
- [ ] RabbitMQ
    - [ ] Сам чарт k8s
        - [ ] RabbitMQ dashboard
    - [ ] Поддержка в NestJS
        - [ ] Сидирование
        - [ ] Декораторы для producer
        - [ ] Декораторы для consumer
        - [ ] Логирование в базу данных время создания и обработки задач
- [ ] Cron
    - [ ] Сам чарт k8s
    - [ ] Логирование в базу данных время вызова джобы
- [ ] Helm
    - [ ] Вынесение переменных в .Values
    - [ ] Использование нескольких реплик и лоад балансеров