"""empty message

Revision ID: 2828be8e2154
Revises: 
Create Date: 2020-06-14 15:02:56.525988

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2828be8e2154'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('teacher', sa.Column('email', sa.String(length=320), nullable=True))
    op.add_column('teacher', sa.Column('timezone', sa.String(length=40), nullable=True))
    op.add_column('teacher', sa.Column('years_experience', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('teacher', 'years_experience')
    op.drop_column('teacher', 'timezone')
    op.drop_column('teacher', 'email')
    # ### end Alembic commands ###