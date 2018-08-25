# services/users/project/__init__.py

from flask_cors import CORS
import os

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_debugtoolbar import DebugToolbarExtension  # new


# instantiate the extensions
db = SQLAlchemy()
toolbar = DebugToolbarExtension()  # new


def create_app(script_info=None):

    # instantiate the app
    app = Flask(__name__)

    # enable CORS
    CORS(app)  # new

    # set config
    app_settings = os.getenv('APP_SETTINGS')
    app.config.from_object(app_settings)

    # set up extensions
    db.init_app(app)
<<<<<<< HEAD
    toolbar.init_app(app)  # new
=======
    # toolbar.init_app(app)
>>>>>>> a25d4d2a68b6637a2685b2dba59376c901f5ce96

    # register blueprints
    from project.api.users import users_blueprint
    app.register_blueprint(users_blueprint)

    # shell context for flask cli
    @app.shell_context_processor
    def ctx():
        return {'app': app, 'db': db}

    return app
