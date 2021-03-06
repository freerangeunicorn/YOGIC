"""empty message

Revision ID: c39cb54efd3f
Revises: 85c97eb29f0c
Create Date: 2020-06-15 16:55:45.057879

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c39cb54efd3f'
down_revision = '85c97eb29f0c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('student', sa.Column('password_hash', sa.String(length=40), nullable=False))
    op.add_column('teacher', sa.Column('password_hash', sa.String(length=40), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('teacher', 'password_hash')
    op.drop_column('student', 'password_hash')
    # ### end Alembic commands ###
