# 🗺 Nico's Portfolio
Bienvenido  a mi portafolio de Datos, acá hay un recopilatorio de mis proyectos de análisis de datos
## Pipeline de precios de supermercados en la nube (SEPA, Argentina)

| Link al proyecto | Area | Descripción | Tecnologías |
| --- | --- | --- | --- |
| [Ver Proyecto](https://github.com/NeoG14/sepa-pipeline)<br><br>[Ver sitio en vivo](https://neog14.github.io/sepa-pipeline/) | Ingeniería de datos, ETL, modelado, automatización, clasificación con ML y LLM | Pipeline de punta a punta que descarga todos los días ~14 millones de registros de precios del dataset oficial SEPA (el portal los borra a la semana), los valida y guarda en Parquet, los transforma con dbt sobre DuckDB y los publica en MotherDuck. Un workflow de GitHub Actions exporta los datos y actualiza solo un sitio web estático. Incluye un índice de precios encadenado para ver la inflación por cadena y provincia, y la clasificación de 73 mil productos en 85 categorías (reglas + regresión logística 86,4 % de acierto vs. LLM 91,6 %, medido sobre 300 productos no vistos). Responde cuánto cambian los precios de los supermercados día a día. | Python, dbt, DuckDB, MotherDuck, Parquet, GitHub Actions, GitHub Pages, scikit-learn |

## Pipeline de ofertas de trabajo en datos (Latinoamérica)
| Link al proyecto | Area | Descripción | Tecnologías |
| --- | --- | --- | --- |
| [Ver Proyecto](https://github.com/NeoG14/Pipeline-ETL-datajobs) | Ingeniería de datos, ETL, modelado, orquestación, Power BI | Pipeline de punta a punta que descarga todos los días las ofertas de trabajo de la API pública de Get on Board, guarda una foto diaria en PostgreSQL, la transforma con dbt (16 tests de calidad) y la muestra en un tablero de Power BI. Todo orquestado con Airflow y corriendo en Docker. Responde qué habilidades, seniority y modalidad remota piden las empresas de datos en Latinoamérica. | Python, PostgreSQL, dbt, Airflow, Docker, Power BI (DAX) |

## Análisis completo E-commerce Olist
| Link al proyecto | Area | Descripción | Librerias |
| --- | --- | --- | --- |
| [Ver Proyecto](https://github.com/NeoG14/Olist-Analisis) | ETL, EDA, PostgreSQL , Power Bi | Este proyecto analiza el rendimiento operativo, financiero y logístico de Olist, una plataforma de comercio electrónico brasileña. El análisis abarca el ciclo completo de los datos: desde la extracción y limpieza (ETL), pasando por el análisis exploratorio con SQL, hasta la visualización en dashboards interactivos para la extracción de insights de negocio.| pandas |

## Análisis exploratorio con Python 
| Link al proyecto | Area | Descripción | Librerias |
| --- | --- | --- | --- |
| [Ver Proyecto](https://github.com/NeoG14/Analisis-de-bebidas-energizantes/tree/main) | Manipulación de datos y EDA | Análisis de inserción y aceptación de MegaBoost, una marca de bebidas energizantes de Inglaterra que busca ingresar al mercado italiano. Evaluación de una encuesta aplicada a 10.000 personas en 10 ciudades de Italia para apoyar al equipo de marketing en posicionamiento y participación de mercado.| pandas, matplotlib, numpy, PostgreSQL, Power BI |

## Excel y SQL 
| Link al proyecto | Area | Descripción |
| --- | --- | --- |
| [Ver Proyecto](https://github.com/NeoG14/Pizza-sales-Dashboard/tree/main) | Excel , Power Query y PostgreSQL| Análisis interactivo del volumen de ventas y rendimiento del menú de una pizzería para identificar patrones de comportamiento del consumidor, horarios pico y optimizar el inventario.|
